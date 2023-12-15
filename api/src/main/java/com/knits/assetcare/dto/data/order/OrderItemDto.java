package com.knits.assetcare.dto.data.order;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.knits.assetcare.dto.data.common.AbstractActiveDto;
import com.knits.assetcare.dto.validation.OnUpdate;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.PositiveOrZero;
import java.math.BigDecimal;

@Data
@NoArgsConstructor
@SuperBuilder(toBuilder = true)
public class OrderItemDto extends AbstractActiveDto {

    @NotNull(groups = {OnUpdate.class, OnUpdate.class})
    @PositiveOrZero(groups = {OnUpdate.class, OnUpdate.class})
    private Integer quantity;

    @NotNull(groups = {OnUpdate.class, OnUpdate.class})
    @PositiveOrZero(groups = {OnUpdate.class, OnUpdate.class})
    private BigDecimal price;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @Valid
    private PurchaseOrderDto order;

}

