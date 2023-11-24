package com.knits.assetcare.mapper.order;

import com.knits.assetcare.dto.data.order.PurchaseOrderDto;
import com.knits.assetcare.mapper.business.CustomerMapper;
import com.knits.assetcare.mapper.business.VendorMapper;
import com.knits.assetcare.mapper.common.AbstractAuditableEntityMapper;
import com.knits.assetcare.mapper.common.CategoryMapper;
import com.knits.assetcare.mapper.common.IgnoreAuditMapping;
import com.knits.assetcare.model.order.PurchaseOrder;
import org.mapstruct.*;
import org.springframework.stereotype.Component;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.WARN, uses = {VendorMapper.class, CustomerMapper.class, CategoryMapper.class, OrderItemMapper.class})
@Component
public interface PurchaseOrderMapper extends AbstractAuditableEntityMapper<PurchaseOrder, PurchaseOrderDto> {


    @Named("toPurchaseOrderDtoDetails")
    @IgnoreAuditMapping
    PurchaseOrderDto toDtoDetails(PurchaseOrder purchaseOrder);

    @IgnoreAuditMapping
    @Mapping(target = "orderItems", ignore = true)
    @Mapping(source = "vendor", target = "vendor")
    PurchaseOrderDto toDto(PurchaseOrder purchaseOrder);

    @IgnoreAuditMapping
    PurchaseOrder toEntity(PurchaseOrderDto purchaseOrderDto);

    @Named("partialUpdatePurchaseOrder")
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    @Mapping(target = "category", ignore = true)
    @Mapping(target = "customer", ignore = true)
    @Mapping(target = "vendor", ignore = true)
    @Mapping(target = "orderItems", ignore = true)
    void partialUpdate(@MappingTarget PurchaseOrder entity, PurchaseOrderDto purchaseOrderDto);

    @Named("updatePurchaseOrder")
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.SET_TO_NULL)
    @IgnoreAuditMapping
    @Mapping(target = "category", ignore = true)
    @Mapping(target = "customer", ignore = true)
    @Mapping(target = "vendor", ignore = true)
    @Mapping(target = "orderItems", ignore = true)
    void update(@MappingTarget PurchaseOrder purchaseOrder, PurchaseOrderDto purchaseOrderDto);
}
