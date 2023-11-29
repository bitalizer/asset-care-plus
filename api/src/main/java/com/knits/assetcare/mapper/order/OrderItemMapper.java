package com.knits.assetcare.mapper.order;

import com.knits.assetcare.dto.data.order.OrderItemDto;
import com.knits.assetcare.mapper.common.EntityMapper;
import com.knits.assetcare.model.order.OrderItem ;
import org.mapstruct.*;
import org.springframework.stereotype.Component;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.WARN)
@Component
public interface OrderItemMapper extends EntityMapper<OrderItem, OrderItemDto> {

    @Named("toOrderItemDtoDetails")
    OrderItemDto toDtoDetails(OrderItem orderItem);

    @Mapping(target = "order", ignore = true)
    OrderItemDto toDto(OrderItem orderItem);

    @Mapping(target = "order", ignore = true)
    OrderItem toEntity(OrderItemDto orderItemDto);

    @Named("partialUpdateOrderItem")
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    @Mapping(target = "order", ignore = true)
    void partialUpdate(@MappingTarget OrderItem entity, OrderItemDto purchaseOrderDto);

    @Named("updateOrderItem")
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.SET_TO_NULL)
    @Mapping(target = "order", ignore = true)
    void update(@MappingTarget OrderItem orderItem, OrderItemDto orderItemDto);
}
