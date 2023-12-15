package com.knits.assetcare.mapper.maintenance;

import com.knits.assetcare.dto.data.maintenance.WorkOrderDto;
import com.knits.assetcare.mapper.common.AbstractAuditableEntityMapper;
import com.knits.assetcare.mapper.common.CategoryMapper;
import com.knits.assetcare.mapper.common.IgnoreAuditMapping;
import com.knits.assetcare.mapper.inventory.AssetMapper;
import com.knits.assetcare.model.maintenance.WorkOrder;
import org.mapstruct.*;
import org.springframework.stereotype.Component;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.WARN, uses = {CategoryMapper.class, AssetMapper.class}, builder = @Builder(disableBuilder = true))
@Component
public interface WorkOrderMapper extends AbstractAuditableEntityMapper<WorkOrder, WorkOrderDto> {

    @Named("toWorkOrderDtoDetails")
    @IgnoreAuditMapping
    WorkOrderDto toDtoDetails(WorkOrder workOrder);

    @IgnoreAuditMapping
    @Mapping(target = "description", ignore = true)
    WorkOrderDto toDto(WorkOrder workOrder);

    @IgnoreAuditMapping
    WorkOrder toEntity(WorkOrderDto workOrderDto);

    @Named("partialUpdateWorkOrder")
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    @Mapping(target = "category", ignore = true)
    @Mapping(target = "asset", ignore = true)
    void partialUpdate(@MappingTarget WorkOrder entity, WorkOrderDto workOrderDto);

    @Named("updateWorkOrder")
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.SET_TO_NULL)
    @IgnoreAuditMapping
    @Mapping(target = "category", ignore = true)
    @Mapping(target = "asset", ignore = true)
    void update(@MappingTarget WorkOrder workOrder, WorkOrderDto workOrderDto);

}
