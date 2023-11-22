package com.knits.assetcare.mapper.inventory;

import com.knits.assetcare.dto.data.inventory.AssetDto;
import com.knits.assetcare.mapper.common.CategoryMapper;
import com.knits.assetcare.mapper.common.IgnoreAuditMapping;
import com.knits.assetcare.mapper.business.VendorMapper;
import com.knits.assetcare.mapper.location.LocationMapper;
import com.knits.assetcare.model.inventory.Asset;
import org.mapstruct.*;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.WARN,
        uses = {CategoryMapper.class, PartMapper.class, VendorMapper.class, LocationMapper.class})
@Component
public interface AssetMapper extends AbstractInventoryItemMapper<Asset, AssetDto> {

    @Named("toAssetDtoDetails")
    @IgnoreAuditMapping
    //@Mapping(source = "createdBy", target = "createdBy", ignore = true)
    @Mapping(source = "category", target = "category", qualifiedByName = "toCategoryDtoDetails")
    @Mapping(source = "vendor", target = "vendor")
    @Mapping(source = "location", target = "location", qualifiedByName = "toLocationDtoDetails")
    @Mapping(source = "parts", target = "parts", qualifiedByName = "toPartDtosDetails")
    @Mapping(source = "notes", target = "notes")
    @Mapping(source = "useAssetCare", target = "useAssetCare")
    AssetDto toDtoDetails(Asset asset);

    @IgnoreAuditMapping
    //@Mapping(source = "createdBy", target = "createdBy", ignore = true)
    @Mapping(source = "parts", target = "parts", ignore = true)
    @Mapping(source = "images", target = "images", ignore = true)
    @Mapping(source = "files", target = "files", ignore = true)
    @Mapping(source = "notes", target = "notes", ignore = true)
    @Mapping(source = "useAssetCare", target = "useAssetCare", ignore = true)
    AssetDto toDto(Asset asset);

    @Mapping(source = "vendor", target = "vendor", ignore = true)
    Asset toEntity(AssetDto assetDto);

    @IgnoreAuditMapping
    @Mapping(source = "vendor", target = "vendor", ignore = true)
    List<AssetDto> toDtos(List<Asset> assets);

    @IgnoreAuditMapping
    @Mapping(source = "vendor", target = "vendor", ignore = true)
    List<Asset> toEntities(List<AssetDto> assetDtos);

}
