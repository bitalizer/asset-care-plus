package com.knits.assetcare.service.business;


import com.knits.assetcare.dto.api.PaginatedResponseDto;

import com.knits.assetcare.dto.data.business.VendorDto;
import com.knits.assetcare.dto.search.business.VendorSearchDto;
import com.knits.assetcare.exceptions.UserException;

import com.knits.assetcare.mapper.business.VendorMapper;
import com.knits.assetcare.model.business.Vendor;
import com.knits.assetcare.repository.business.VendorRepository;
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
public class VendorService {

    private final VendorMapper vendorMapper;
    private final VendorRepository vendorRepository;

    public VendorDto saveNewVendor(VendorDto vendorDto) {
        Vendor vendor = vendorMapper.toEntity(vendorDto);
        Vendor savedVendor = vendorRepository.save(vendor);
        return vendorMapper.toDtoDetails(savedVendor);
    }

    public VendorDto findVendorById(Long id) {
        Vendor vendor = vendorRepository.findById(id).orElseThrow(() -> new UserException("Vendor#" + id + " not found"));
        return vendorMapper.toDtoDetails(vendor);
    }

    public VendorDto partialUpdate(VendorDto vendorDto) {
        Vendor vendor = vendorRepository.findById(vendorDto.getId()).orElseThrow(() -> new UserException("Vendor#" + vendorDto.getId() + " not found"));

        vendorMapper.partialUpdate(vendor, vendorDto);
        vendorRepository.save(vendor);
        return vendorMapper.toDtoDetails(vendor);
    }

    public void deleteVendor(Long id) {
        Vendor vendor = vendorRepository.findById(id).orElseThrow(() -> new UserException("Vendor#" + id + " not found"));
        vendorRepository.delete(vendor);
    }

    public PaginatedResponseDto<VendorDto> search(VendorSearchDto searchDto) {

        Page<Vendor> vendorsPage = vendorRepository.findAll(searchDto.getSpecification(), searchDto.getPageable());
        List<VendorDto> vendorDtos = vendorMapper.toDtosDetails(vendorsPage.getContent());

        return PaginatedResponseDto.<VendorDto>builder()
                .page(searchDto.getPage())
                .size(vendorDtos.size())
                .totalElements(vendorsPage.getTotalElements())
                .totalPages(vendorsPage.getTotalPages())
                .sortingFields(searchDto.getSort())
                .sortDirection(searchDto.getDir().name())
                .data(vendorDtos)
                .build();
    }
}


