package com.knits.assetcare.service.business;

import com.knits.assetcare.dto.api.PaginatedResponseDto;
import com.knits.assetcare.dto.data.business.CustomerDto;
import com.knits.assetcare.dto.data.common.BillingDetailsDto;
import com.knits.assetcare.dto.data.common.ContactDto;
import com.knits.assetcare.dto.search.business.CustomerSearchDto;
import com.knits.assetcare.exceptions.UserException;
import com.knits.assetcare.mapper.business.CustomerMapper;
import com.knits.assetcare.mapper.business.CustomerMapperImpl;
import com.knits.assetcare.mapper.common.*;
import com.knits.assetcare.mocks.dto.business.CustomerDtoMock;
import com.knits.assetcare.mocks.model.business.CustomerMock;
import com.knits.assetcare.model.business.Customer;
import com.knits.assetcare.repository.business.CustomerRepository;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.*;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.test.util.ReflectionTestUtils;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class CustomerServiceTest {

    @Mock
    private CustomerRepository customerRepository;

    @Spy
    private static CustomerMapper customerMapper = new CustomerMapperImpl();

    @Captor
    private ArgumentCaptor<Customer> customerArgumentCaptor;

    @InjectMocks
    private CustomerService customerService;

    @BeforeAll
    public static void init() {

        ContactMapper contactMapper = new ContactMapperImpl();

        BillingDetailsMapper billingDetailsMapper = new BillingDetailsMapperImpl();
        AddressMapper addressMapper = new AddressMapperImpl();
        ReflectionTestUtils.setField(billingDetailsMapper, "addressMapper", addressMapper);

        ReflectionTestUtils.setField(customerMapper, "contactMapper", contactMapper);
        ReflectionTestUtils.setField(customerMapper, "billingDetailsMapper", billingDetailsMapper);
    }

    @Test
    @DisplayName("Save new Customer Success")
    void saveNewCustomer() {

        final Long mockId = 1L;
        final Long customerGeneratedId = 1L;

        CustomerDto toSaveDto = CustomerDtoMock.shallowCustomerDto(null);

        toSaveDto.setBillingDetails(BillingDetailsDto.builder().id(mockId).build());
        toSaveDto.setContact(ContactDto.builder().id(mockId).build());

        when(customerRepository.save(Mockito.any(Customer.class)))
                .thenAnswer(invocation -> {
                    Customer customer = invocation.getArgument(0);
                    customer.setId(customerGeneratedId);
                    return customer;
                });

        CustomerDto savedDto = customerService.saveNewCustomer(toSaveDto);

        verify(customerRepository).save(customerArgumentCaptor.capture());
        Customer toSaveEntity = customerArgumentCaptor.getValue();

        verify(customerMapper, times(1)).toEntity(toSaveDto);
        verify(customerMapper, times(1)).toDtoFullDetails(toSaveEntity);
        verify(customerRepository, times(1)).save(toSaveEntity);

        assertThat(toSaveDto).isEqualTo(savedDto);
    }

    @Test
    @DisplayName("findById Customer Success")
    void findCustomerById() {

        Customer toFind = CustomerMock.shallowCustomer(1L);

        when(customerRepository.findById(toFind.getId())).thenReturn(Optional.of(toFind));

        CustomerDto foundDto = customerService.findCustomerById(toFind.getId());

        verify(customerRepository, times(1)).findById(toFind.getId());
        verify(customerMapper, times(1)).toDtoFullDetails(toFind);

        assertNotNull(foundDto);
    }

    @Test
    @DisplayName("find ById Customer Not Found")
    void findCustomerByIdNotFound() {

        Long CustomerId = 1L;

        when(customerRepository.findById(CustomerId)).thenReturn(Optional.empty());

        assertThrows(UserException.class, () -> customerService.findCustomerById(CustomerId));

        verify(customerRepository, times(1)).findById(any());
        verifyNoInteractions(customerMapper);
    }


    @Test
    @DisplayName("partial update Customer Success")
    void partialUpdateCustomer() {


        CustomerDto toUpdateDto = CustomerDtoMock.shallowCustomerDto(1L);

        when(customerRepository.findById(toUpdateDto.getId())).thenReturn(Optional.of(new Customer()));
        when(customerRepository.save(Mockito.any(Customer.class)))
                .thenAnswer(invocation -> invocation.getArgument(0));

        CustomerDto savedDto = customerService.partialUpdate(toUpdateDto);

        verify(customerRepository).save(customerArgumentCaptor.capture());
        Customer toUpdateEntity = customerArgumentCaptor.getValue();

        verify(customerRepository, times(1)).save(toUpdateEntity);
        verify(customerMapper, times(1)).toDtoFullDetails(toUpdateEntity);

        assertThat(toUpdateDto).isEqualTo(savedDto);
    }

    @Test
    @DisplayName("delete Customer Success")
    void deleteCustomerById() {

        Customer toDelete = CustomerMock.shallowCustomer(1L);

        when(customerRepository.findById(toDelete.getId())).thenReturn(Optional.of(toDelete));

        customerService.deleteCustomer(toDelete.getId());

        verify(customerRepository, times(1)).findById(toDelete.getId());
        verify(customerRepository, times(1)).delete(customerArgumentCaptor.capture());

        Customer toDeleteEntity = customerArgumentCaptor.getValue();

        assertThat(toDeleteEntity).isEqualTo(toDelete);
    }

    @Test
    @DisplayName("delete Customer Not Found")
    void deleteCustomerByIdNotFound() {
        Long CustomerId = 1L;

        when(customerRepository.findById(CustomerId)).thenReturn(Optional.empty());

        assertThrows(UserException.class, () -> customerService.deleteCustomer(CustomerId));

        verify(customerRepository, times(1)).findById(CustomerId);
        verify(customerRepository, never()).delete(any());
        verifyNoInteractions(customerMapper);
    }

    @Test
    @DisplayName("search for Customers Success")
    void searchSuccess() {
        List<Customer> customers = CustomerMock.shallowListOfCustomers(25);

        CustomerSearchDto searchDto = spy(CustomerSearchDto.builder()
                .page(0)
                .limit(10)
                .sort("id")
                .dir(Sort.Direction.ASC)
                .build());

        Specification<Customer> specification = searchDto.getSpecification();
        when(searchDto.getSpecification()).thenReturn(specification);

        Page<Customer> page = new PageImpl<>(customers.subList(0, searchDto.getLimit()), searchDto.getPageable(), customers.size());
        when(customerRepository.findAll(specification, searchDto.getPageable())).thenReturn(page);
        PaginatedResponseDto<CustomerDto> response = customerService.search(searchDto);

        verify(customerRepository, times(1)).findAll(specification, searchDto.getPageable());
        verify(customerMapper, times(1)).toDtosDetails(customers.subList(0, searchDto.getLimit()));

        assertThat(response.getSize()).isLessThanOrEqualTo(searchDto.getLimit());
        assertThat(response.getPage()).isEqualTo(searchDto.getPage());
        assertThat(response.getTotalElements()).isEqualTo(customers.size());
    }

}