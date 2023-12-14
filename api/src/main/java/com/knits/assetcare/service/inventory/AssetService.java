package com.knits.assetcare.service.inventory;

import com.knits.assetcare.dto.api.PaginatedResponseDto;
import com.knits.assetcare.dto.data.inventory.AssetDto;
import com.knits.assetcare.dto.search.inventory.AssetSearchDto;
import com.knits.assetcare.exceptions.UserException;
import com.knits.assetcare.mapper.inventory.AssetMapper;
import com.knits.assetcare.model.inventory.Asset;
import com.knits.assetcare.repository.inventory.AssetRepository;
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
@CacheConfig(cacheNames = "assets")
@Slf4j
@AllArgsConstructor
public class AssetService {

    private final AssetMapper assetMapper;
    private final AssetRepository assetRepository;

    public AssetDto saveNewAsset(AssetDto assetDto) {
        Asset asset = assetMapper.toEntity(assetDto);
        Asset savedAsset = assetRepository.save(asset);
        return assetMapper.toDtoFullDetails(savedAsset);
    }

    @Cacheable(key = "#id", unless = "#result == null")
    public AssetDto findAssetById(Long id) {
        Asset asset = assetRepository.findById(id).orElseThrow(() -> new UserException("Asset#" + id + " not found"));
        return assetMapper.toDtoFullDetails(asset);
    }

    @CachePut(key = "#result.id")
    public AssetDto partialUpdate(AssetDto assetDto) {
        Asset asset = assetRepository.findById(assetDto.getId()).orElseThrow(() -> new UserException("Asset#" + assetDto.getId() + " not found"));

        assetMapper.partialUpdate(asset, assetDto);
        assetRepository.save(asset);
        return assetMapper.toDtoFullDetails(asset);
    }

    @CacheEvict(key = "#id")
    public void deleteAsset(Long id) {
        Asset asset = assetRepository.findById(id).orElseThrow(() -> new UserException("Asset#" + id + " not found"));
        assetRepository.delete(asset);
    }

    @Cacheable(key = "{#searchDto.limit, #searchDto.page, #searchDto.sort, #searchDto.dir.name()}", unless = "#result.data.isEmpty()")
    public PaginatedResponseDto<AssetDto> search(AssetSearchDto searchDto) {

        Page<Asset> assetsPage = assetRepository.findAll(searchDto.getSpecification(), searchDto.getPageable());
        List<AssetDto> assetDtos = assetMapper.toDtosDetails(assetsPage.getContent());

        return PaginatedResponseDto.<AssetDto>builder()
                .page(searchDto.getPage())
                .size(assetDtos.size())
                .totalElements(assetsPage.getTotalElements())
                .totalPages(assetsPage.getTotalPages())
                .sortingFields(searchDto.getSort())
                .sortDirection(searchDto.getDir().name())
                .data(assetDtos)
                .build();
    }
}


