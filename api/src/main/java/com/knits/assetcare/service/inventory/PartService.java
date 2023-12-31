package com.knits.assetcare.service.inventory;


import com.knits.assetcare.dto.api.PaginatedResponseDto;
import com.knits.assetcare.dto.data.inventory.PartDto;
import com.knits.assetcare.dto.search.inventory.PartSearchDto;
import com.knits.assetcare.exceptions.UserException;
import com.knits.assetcare.mapper.inventory.PartMapper;
import com.knits.assetcare.model.inventory.Part;
import com.knits.assetcare.repository.inventory.PartRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
@Transactional
@CacheConfig(cacheNames = "parts")
@Slf4j
@AllArgsConstructor
public class PartService {

    private final PartMapper partMapper;
    private final PartRepository partRepository;

    public PartDto saveNewPart(PartDto partDto) {
        Part part = partMapper.toEntity(partDto);
        Part savedPart = partRepository.save(part);
        return partMapper.toDto(savedPart);
    }

    @Cacheable(key = "#id", unless = "#result == null")
    public PartDto findPartById(Long id) {
        Part part = partRepository.findById(id).orElseThrow(() -> new UserException("Part#" + id + " not found"));
        return partMapper.toDtoDetails(part);
    }

    @CachePut(key = "#result.id")
    public PartDto partialUpdate(PartDto partDto) {
        Part part = partRepository.findById(partDto.getId()).orElseThrow(() -> new UserException("Part#" + partDto.getId() + " not found"));

        partMapper.partialUpdate(part, partDto);
        partRepository.save(part);
        return partMapper.toDto(part);
    }

    @CacheEvict(key = "#id")
    public void deletePart(Long id) {
        Part part = partRepository.findById(id).orElseThrow(() -> new UserException("Part#" + id + " not found"));
        partRepository.delete(part);
    }

    @Cacheable(key = "{#searchDto.limit, #searchDto.page, #searchDto.sort, #searchDto.dir.name()}", unless = "#result.data.isEmpty()")
    public PaginatedResponseDto<PartDto> search(PartSearchDto searchDto) {

        Page<Part> partsPage = partRepository.findAll(searchDto.getSpecification(), searchDto.getPageable());
        List<PartDto> partDtos = partMapper.toDtos(partsPage.getContent());

        return PaginatedResponseDto.<PartDto>builder()
                .page(searchDto.getPage())
                .size(partDtos.size())
                .totalElements(partsPage.getTotalElements())
                .totalPages(partsPage.getTotalPages())
                .sortingFields(searchDto.getSort())
                .sortDirection(searchDto.getDir().name())
                .data(partDtos)
                .build();
    }
}


