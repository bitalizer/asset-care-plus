package com.knits.assetcare.service.business;


import com.knits.assetcare.dto.api.PaginatedResponseDto;
import com.knits.assetcare.dto.data.business.CustomerDto;
import com.knits.assetcare.dto.search.business.CustomerSearchDto;
import com.knits.assetcare.exceptions.UserException;
import com.knits.assetcare.mapper.business.CustomerMapper;
import com.knits.assetcare.model.business.Customer;
import com.knits.assetcare.repository.business.CustomerRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
@Transactional
@Slf4j
@AllArgsConstructor
public class CustomerService {

    private final CustomerMapper customerMapper;
    private final CustomerRepository customerRepository;

    public CustomerDto saveNewCustomer(CustomerDto customerDto) {
        Customer customer = customerMapper.toEntity(customerDto);
        Customer savedCustomer = customerRepository.save(customer);
        return customerMapper.toDto(savedCustomer);
    }

    public CustomerDto findCustomerById(Long id) {
        Customer customer = customerRepository.findById(id).orElseThrow(() -> new UserException("Customer#" + id + " not found"));
        return customerMapper.toDtoDetails(customer);
    }

    public CustomerDto partialUpdate(CustomerDto customerDto) {
        Customer customer = customerRepository.findById(customerDto.getId()).orElseThrow(() -> new UserException("Customer#" + customerDto.getId() + " not found"));

        customerMapper.partialUpdate(customer, customerDto);
        customerRepository.save(customer);
        return customerMapper.toDto(customer);
    }

    public void deleteCustomer(Long id) {
        Customer customer = customerRepository.findById(id).orElseThrow(() -> new UserException("Customer#" + id + " not found"));
        customerRepository.delete(customer);
    }

    public PaginatedResponseDto<CustomerDto> search(CustomerSearchDto searchDto) {

        Page<Customer> customersPage = customerRepository.findAll(searchDto.getSpecification(), searchDto.getPageable());
        List<CustomerDto> customerDtos = customerMapper.toDtosDetails(customersPage.getContent());

        return PaginatedResponseDto.<CustomerDto>builder()
                .page(searchDto.getPage())
                .size(customerDtos.size())
                .sortingFields(searchDto.getSort())
                .sortDirection(searchDto.getDir().name())
                .data(customerDtos)
                .build();
    }
}


