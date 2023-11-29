package com.knits.assetcare.dto.data.order;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.knits.assetcare.model.common.AbstractEntity;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@SuperBuilder(toBuilder = true)
public class OrderItemDto extends AbstractEntity {

    private Integer quantity;

    private BigDecimal price;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private PurchaseOrderDto order;

}

