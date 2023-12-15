package com.knits.assetcare.dto.data.order;

import com.knits.assetcare.dto.data.inventory.PartDto;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.validation.Valid;

@Data
@NoArgsConstructor
@SuperBuilder(toBuilder = true)
public class PartOrderItemDto extends OrderItemDto {

    @Valid
    private PartDto part;

}

