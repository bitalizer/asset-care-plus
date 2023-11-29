package com.knits.assetcare.mapper.common;

import com.knits.assetcare.config.Constants;
import com.knits.assetcare.dto.data.common.AbstractAuditableDto;
import com.knits.assetcare.model.common.AbstractAuditableEntity;
import org.mapstruct.*;


public interface AbstractAuditableEntityMapper<E extends AbstractAuditableEntity, D extends AbstractAuditableDto> extends EntityMapper<E, D> {

    @Named("toDtoAbstractAuditableEntity")
    @IgnoreAuditMapping
    D toDto(E entity);

    @Named("toEntityAbstractAuditableEntity")
    @IgnoreAuditMapping
    E toEntity(D dto);

    @Named("updateAbstractAuditableEntity")
    @IgnoreAuditMapping
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    void partialUpdate(@MappingTarget E entity, D dto);

    @Named("partialUpdateAbstractAuditableEntity")
    @IgnoreAuditMapping
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.SET_TO_NULL)
    void update(@MappingTarget E entity, D dto);
}
