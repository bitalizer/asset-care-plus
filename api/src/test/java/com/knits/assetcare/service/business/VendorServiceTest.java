package com.knits.assetcare.service.business;

import com.knits.assetcare.dto.api.PaginatedResponseDto;
import com.knits.assetcare.dto.data.business.VendorDto;
import com.knits.assetcare.dto.data.common.OrganizationDto;
import com.knits.assetcare.dto.search.business.VendorSearchDto;
import com.knits.assetcare.exceptions.UserException;
import com.knits.assetcare.mapper.business.VendorMapper;
import com.knits.assetcare.mapper.business.VendorMapperImpl;
import com.knits.assetcare.mapper.common.*;
import com.knits.assetcare.mocks.dto.business.VendorDtoMock;
import com.knits.assetcare.mocks.model.business.VendorMock;
import com.knits.assetcare.model.business.Vendor;
import com.knits.assetcare.repository.business.VendorRepository;
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
class VendorServiceTest {

    @Mock
    private VendorRepository vendorRepository;

    @Spy
    private static VendorMapper vendorMapper = new VendorMapperImpl();

    @Captor
    private ArgumentCaptor<Vendor> vendorArgumentCaptor;

    @InjectMocks
    private VendorService vendorService;

    @BeforeAll
    public static void init() {

        OrganizationMapper organizationMapper = new OrganizationMapperImpl();
        AddressMapper addressMapper = new AddressMapperImpl();
        ContactMapper contactMapper = new ContactMapperImpl();

        ReflectionTestUtils.setField(organizationMapper, "addressMapper", addressMapper);
        ReflectionTestUtils.setField(organizationMapper, "contactMapper", contactMapper);

        ReflectionTestUtils.setField(vendorMapper, "organizationMapper", organizationMapper);
    }

    @Test
    @DisplayName("Save new Vendor Success")
    void saveNewVendor() {

        final Long mockId = 1L;
        final Long vendorGeneratedId = 1L;

        VendorDto toSaveDto = VendorDtoMock.shallowVendorDto(null);
        toSaveDto.setOrganization(OrganizationDto.builder().id(mockId).build());

        when(vendorRepository.save(Mockito.any(Vendor.class)))
                .thenAnswer(invocation -> {
                    Vendor vendor = invocation.getArgument(0);
                    vendor.setId(vendorGeneratedId);
                    return vendor;
                });

        VendorDto savedDto = vendorService.saveNewVendor(toSaveDto);

        verify(vendorRepository).save(vendorArgumentCaptor.capture());
        Vendor toSaveEntity = vendorArgumentCaptor.getValue();

        verify(vendorMapper, times(1)).toEntity(toSaveDto);
        verify(vendorMapper, times(1)).toDtoDetails(toSaveEntity);
        verify(vendorRepository, times(1)).save(toSaveEntity);

        assertThat(toSaveDto).isEqualTo(savedDto);
    }

    @Test
    @DisplayName("findById Vendor Success")
    void findVendorById() {

        Vendor toFind = VendorMock.shallowVendor(1L);

        when(vendorRepository.findById(toFind.getId())).thenReturn(Optional.of(toFind));

        VendorDto foundDto = vendorService.findVendorById(toFind.getId());

        verify(vendorRepository, times(1)).findById(toFind.getId());
        verify(vendorMapper, times(1)).toDtoDetails(toFind);

        assertNotNull(foundDto);
    }

    @Test
    @DisplayName("find ById Vendor Not Found")
    void findVendorByIdNotFound() {

        Long VendorId = 1L;

        when(vendorRepository.findById(VendorId)).thenReturn(Optional.empty());

        assertThrows(UserException.class, () -> vendorService.findVendorById(VendorId));

        verify(vendorRepository, times(1)).findById(any());
        verifyNoInteractions(vendorMapper);
    }


    @Test
    @DisplayName("partial update Vendor Success")
    void partialUpdateVendor() {


        VendorDto toUpdateDto = VendorDtoMock.shallowVendorDto(1L);

        when(vendorRepository.findById(toUpdateDto.getId())).thenReturn(Optional.of(new Vendor()));
        when(vendorRepository.save(Mockito.any(Vendor.class)))
                .thenAnswer(invocation -> invocation.getArgument(0));

        VendorDto savedDto = vendorService.partialUpdate(toUpdateDto);

        verify(vendorRepository).save(vendorArgumentCaptor.capture());
        Vendor toUpdateEntity = vendorArgumentCaptor.getValue();

        verify(vendorRepository, times(1)).save(toUpdateEntity);
        verify(vendorMapper, times(1)).toDtoDetails(toUpdateEntity);

        assertThat(toUpdateDto).isEqualTo(savedDto);
    }

    @Test
    @DisplayName("delete Vendor Success")
    void deleteVendorById() {

        Vendor toDelete = VendorMock.shallowVendor(1L);

        when(vendorRepository.findById(toDelete.getId())).thenReturn(Optional.of(toDelete));

        vendorService.deleteVendor(toDelete.getId());

        verify(vendorRepository, times(1)).findById(toDelete.getId());
        verify(vendorRepository, times(1)).delete(vendorArgumentCaptor.capture());

        Vendor toDeleteEntity = vendorArgumentCaptor.getValue();

        assertThat(toDeleteEntity).isEqualTo(toDelete);
    }

    @Test
    @DisplayName("delete Vendor Not Found")
    void deleteVendorByIdNotFound() {
        Long VendorId = 1L;

        when(vendorRepository.findById(VendorId)).thenReturn(Optional.empty());

        assertThrows(UserException.class, () -> vendorService.deleteVendor(VendorId));

        verify(vendorRepository, times(1)).findById(VendorId);
        verify(vendorRepository, never()).delete(any());
        verifyNoInteractions(vendorMapper);
    }

    @Test
    @DisplayName("search for Vendors Success")
    void searchSuccess() {
        List<Vendor> vendors = VendorMock.shallowListOfVendors(25);

        VendorSearchDto searchDto = spy(VendorSearchDto.builder()
                .page(0)
                .limit(10)
                .sort("id")
                .dir(Sort.Direction.ASC)
                .build());

        Specification<Vendor> specification = searchDto.getSpecification();
        when(searchDto.getSpecification()).thenReturn(specification);

        Page<Vendor> page = new PageImpl<>(vendors.subList(0, searchDto.getLimit()), searchDto.getPageable(), vendors.size());
        when(vendorRepository.findAll(specification, searchDto.getPageable())).thenReturn(page);
        PaginatedResponseDto<VendorDto> response = vendorService.search(searchDto);

        verify(vendorRepository, times(1)).findAll(specification, searchDto.getPageable());
        verify(vendorMapper, times(1)).toDtosDetails(vendors.subList(0, searchDto.getLimit()));

        assertThat(response.getSize()).isLessThanOrEqualTo(searchDto.getLimit());
        assertThat(response.getPage()).isEqualTo(searchDto.getPage());
        assertThat(response.getTotalElements()).isEqualTo(vendors.size());
    }

}