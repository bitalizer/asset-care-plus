package com.knits.assetcare.dto.data.order;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.knits.assetcare.dto.data.business.CustomerDto;
import com.knits.assetcare.dto.data.business.VendorDto;
import com.knits.assetcare.dto.data.common.AbstractAuditableDto;
import com.knits.assetcare.dto.data.common.CategoryDto;
import com.knits.assetcare.dto.validation.EnumValidator;
import com.knits.assetcare.dto.validation.OnCreate;
import com.knits.assetcare.dto.validation.OnUpdate;
import com.knits.assetcare.model.enums.OrderStatus;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.PositiveOrZero;
import javax.validation.constraints.Size;
import java.math.BigDecimal;
import java.util.List;

@Data
@NoArgsConstructor
@SuperBuilder(toBuilder = true)
public class PurchaseOrderDto extends AbstractAuditableDto {

    @NotNull(groups = {OnCreate.class, OnUpdate.class})
    @PositiveOrZero(groups = {OnUpdate.class, OnUpdate.class})
    private BigDecimal totalCost;

    @NotNull(groups = {OnCreate.class, OnUpdate.class})
    @PositiveOrZero(groups = {OnUpdate.class, OnUpdate.class})
    private Integer totalQuantity;

    @Size(max = 255, groups = {OnCreate.class, OnUpdate.class})
    private String notes;

    @NotNull(groups = {OnCreate.class, OnUpdate.class})
    @EnumValidator(enumClass = OrderStatus.class, groups = {OnCreate.class, OnUpdate.class})
    private OrderStatus status;

    @Valid
    private CategoryDto category;

    @Valid
    private CustomerDto customer;

    @Valid
    private VendorDto vendor;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private List<OrderItemDto> orderItems;

}

