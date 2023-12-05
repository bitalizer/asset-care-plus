package com.knits.assetcare.mapper.maintenance;

import com.knits.assetcare.dto.data.maintenance.WorkRequestDto;
import com.knits.assetcare.mapper.common.AbstractAuditableEntityMapper;
import com.knits.assetcare.mapper.common.IgnoreAuditMapping;
import com.knits.assetcare.model.maintenance.WorkRequest;
import org.mapstruct.*;
import org.springframework.stereotype.Component;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.WARN)
@Component
public interface WorkRequestMapper extends AbstractAuditableEntityMapper<WorkRequest, WorkRequestDto> {

    @Named("toWorkRequestDtoDetails")
    @IgnoreAuditMapping
    WorkRequestDto toDtoDetails(WorkRequest workRequest);

    @IgnoreAuditMapping
    @Mapping(source = "images", target = "images", ignore = true)
    @Mapping(source = "files", target = "files", ignore = true)
    WorkRequestDto toDto(WorkRequest workRequest);

    @IgnoreAuditMapping
    WorkRequest toEntity(WorkRequestDto workRequestDto);

    @Named("partialUpdateWorkRequest")
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    @Mapping(target = "images", ignore = true)
    @Mapping(target = "files", ignore = true)
    void partialUpdate(@MappingTarget WorkRequest entity, WorkRequestDto workRequestDto);

    @Named("updateWorkRequest")
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.SET_TO_NULL)
    @IgnoreAuditMapping
    @Mapping(target = "images", ignore = true)
    @Mapping(target = "files", ignore = true)
    void update(@MappingTarget WorkRequest workRequest, WorkRequestDto workRequestDto);

}
