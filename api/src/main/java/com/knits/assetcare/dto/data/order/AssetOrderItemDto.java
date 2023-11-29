package com.knits.assetcare.dto.data.order;

import com.knits.assetcare.dto.data.inventory.AssetDto;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@NoArgsConstructor
@SuperBuilder(toBuilder = true)
public class AssetOrderItemDto extends OrderItemDto {

    private AssetDto asset;

}

