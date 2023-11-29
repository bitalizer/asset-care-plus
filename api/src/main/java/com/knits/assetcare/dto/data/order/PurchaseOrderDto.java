package com.knits.assetcare.dto.data.order;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.knits.assetcare.dto.data.business.CustomerDto;
import com.knits.assetcare.dto.data.business.VendorDto;
import com.knits.assetcare.dto.data.common.AbstractAuditableDto;
import com.knits.assetcare.dto.data.common.CategoryDto;
import com.knits.assetcare.model.enums.OrderStatus;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.math.BigDecimal;
import java.util.List;

@Data
@NoArgsConstructor
@SuperBuilder(toBuilder = true)
public class PurchaseOrderDto extends AbstractAuditableDto {

    private BigDecimal totalCost;

    private Integer totalQuantity;

    private String notes;

    private OrderStatus status;

    private CategoryDto category;

    private CustomerDto customer;

    private VendorDto vendor;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private List<OrderItemDto> orderItems;

}

