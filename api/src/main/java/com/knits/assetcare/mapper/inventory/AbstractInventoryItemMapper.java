package com.knits.assetcare.mapper.inventory;

import com.knits.assetcare.config.Constants;
import com.knits.assetcare.dto.data.inventory.AbstractInventoryItemDto;
import com.knits.assetcare.mapper.common.EntityMapper;
import com.knits.assetcare.mapper.common.IgnoreAuditMapping;
import com.knits.assetcare.model.inventory.AbstractInventoryItem;
import org.mapstruct.*;

@MapperConfig(componentModel = "spring", mappingInheritanceStrategy = MappingInheritanceStrategy.AUTO_INHERIT_ALL_FROM_CONFIG)
public interface AbstractInventoryItemMapper<E extends AbstractInventoryItem, D extends AbstractInventoryItemDto> extends EntityMapper<E, D> {

    @Named("toDtoAbstractInventoryItem")
    @IgnoreAuditMapping
    D toDto(E entity);

    @Mapping(source = "createdAt", target = "createdAt", dateFormat = Constants.TIME_FORMAT_DD_MM_YYYY_HH_MM_SS)
    @Mapping(source = "updatedAt", target = "updatedAt", dateFormat = Constants.TIME_FORMAT_DD_MM_YYYY_HH_MM_SS, nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.SET_TO_NULL)
    @Mapping(target = "createdBy", ignore = true)
    E toEntity(D dto);

    @Named("partialUpdateAbstractInventoryItem")
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    @Mapping(source = "createdAt", target = "createdAt", dateFormat = Constants.TIME_FORMAT_DD_MM_YYYY_HH_MM_SS)
    @Mapping(source = "updatedAt", target = "updatedAt", dateFormat = Constants.TIME_FORMAT_DD_MM_YYYY_HH_MM_SS, nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.SET_TO_NULL)
    @Mapping(target = "location", ignore = true)
    @Mapping(target = "createdBy", ignore = true)
    void partialUpdate(@MappingTarget E entity, D dto);

    @Named("updateAbstractInventoryItem")
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.SET_TO_NULL)
    @Mapping(source = "createdAt", target = "createdAt", dateFormat = Constants.TIME_FORMAT_DD_MM_YYYY_HH_MM_SS)
    @Mapping(source = "updatedAt", target = "updatedAt", dateFormat = Constants.TIME_FORMAT_DD_MM_YYYY_HH_MM_SS, nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.SET_TO_NULL)
    @Mapping(target = "location", ignore = true)
    @Mapping(target = "createdBy", ignore = true)
    void update(@MappingTarget E entity, D dto);
}
