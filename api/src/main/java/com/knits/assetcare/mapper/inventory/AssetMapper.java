package com.knits.assetcare.mapper.inventory;

import com.knits.assetcare.dto.data.inventory.AssetDto;
import com.knits.assetcare.mapper.business.VendorMapper;
import com.knits.assetcare.mapper.common.CategoryMapper;
import com.knits.assetcare.mapper.common.IgnoreAuditMapping;
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

    @Named("toAssetDtoFullDetails")
    @IgnoreAuditMapping
    @Mapping(target = "description")
    @Mapping(target = "notes")
    @Mapping(target = "barCode")
    @Mapping(target = "useAssetCare")
    @Mapping(target = "status")
    @Mapping(target = "purchaseDate")
    @Mapping(target = "placedInServiceDate")
    @Mapping(target = "warrantyExpirationDate")
    @Mapping(target = "lifeTimeDays")
    @Mapping(target = "category")
    @Mapping(target = "vendor")
    @Mapping(target = "location")
    @Mapping(target = "parts", qualifiedByName = "toPartDtosDetails")
    @Mapping(target = "images")
    @Mapping(target = "files")
    AssetDto toDtoFullDetails(Asset asset);

    @Named("toAssetDtoDetails")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id")
    @Mapping(target = "name")
    @Mapping(target = "price")
    @Mapping(target = "quantity")
    @Mapping(target = "category")
    @Mapping(target = "vendor")
    @Mapping(target = "location")
    AssetDto toDtoDetails(Asset asset);

    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id")
    @Mapping(target = "name")
    AssetDto toDto(Asset asset);

    @Mapping(source = "vendor", target = "vendor", ignore = true)
    Asset toEntity(AssetDto assetDto);

    @IterableMapping(nullValueMappingStrategy = NullValueMappingStrategy.RETURN_DEFAULT)
    List<AssetDto> toDtos(List<Asset> assets);

    @IterableMapping(qualifiedByName = "toAssetDtoDetails")
    @Mapping(target = "parts", ignore = true)
    @Mapping(target = "images", ignore = true)
    @Mapping(target = "files", ignore = true)
    List<AssetDto> toDtosDetails(List<Asset> assets);

    @IgnoreAuditMapping
    @Mapping(source = "vendor", target = "vendor", ignore = true)
    List<Asset> toEntities(List<AssetDto> assetDtos);

}
