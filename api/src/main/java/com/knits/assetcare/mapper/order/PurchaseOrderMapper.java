package com.knits.assetcare.mapper.order;

import com.knits.assetcare.dto.data.order.PurchaseOrderDto;
import com.knits.assetcare.mapper.business.CustomerMapper;
import com.knits.assetcare.mapper.business.VendorMapper;
import com.knits.assetcare.mapper.common.AbstractAuditableEntityMapper;
import com.knits.assetcare.mapper.common.CategoryMapper;
import com.knits.assetcare.mapper.common.IgnoreAuditMapping;
import com.knits.assetcare.model.order.OrderItem;
import com.knits.assetcare.model.order.PurchaseOrder;
import org.mapstruct.*;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.WARN, uses = {VendorMapper.class, CustomerMapper.class, CategoryMapper.class, OrderItemMapper.class}, builder = @Builder(disableBuilder = true))
@Component
public interface PurchaseOrderMapper extends AbstractAuditableEntityMapper<PurchaseOrder, PurchaseOrderDto> {



    @Named("toPurchaseOrderDtoDetails")
    @IgnoreAuditMapping
    @Mapping(target = "totalQuantity", ignore = true)
    @Mapping(target = "totalCost", ignore = true)
    PurchaseOrderDto toDtoDetails(PurchaseOrder purchaseOrder);

    @IgnoreAuditMapping
    @Mapping(target = "orderItems", ignore = true)
    @Mapping(source = "vendor", target = "vendor")
    @Mapping(target = "totalQuantity", ignore = true)
    @Mapping(target = "totalCost", ignore = true)
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

    default BigDecimal calculateTotalCost(List<OrderItem> orderItems) {
        return orderItems.stream().map(item -> item.getPrice().multiply(BigDecimal.valueOf(item.getQuantity()))).reduce(BigDecimal.ZERO, BigDecimal::add);
    }

    default int calculateTotalQuantity(List<OrderItem> orderItems) {
        return orderItems.stream().mapToInt(OrderItem::getQuantity).sum();
    }

    @AfterMapping
    default void afterMapping(PurchaseOrder purchaseOrder, @MappingTarget PurchaseOrderDto purchaseOrderDto) {
        purchaseOrderDto.setTotalCost(calculateTotalCost(purchaseOrder.getOrderItems()));
        purchaseOrderDto.setTotalQuantity(calculateTotalQuantity(purchaseOrder.getOrderItems()));
    }


}
