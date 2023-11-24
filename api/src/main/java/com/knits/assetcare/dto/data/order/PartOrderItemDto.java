package com.knits.assetcare.dto.data.order;

import com.knits.assetcare.dto.data.inventory.PartDto;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@NoArgsConstructor
@SuperBuilder(toBuilder = true)
public class PartOrderItemDto extends OrderItemDto {

    private PartDto part;

}

