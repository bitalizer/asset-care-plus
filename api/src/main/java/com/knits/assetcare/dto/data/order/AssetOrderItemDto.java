package com.knits.assetcare.dto.data.order;

import com.knits.assetcare.dto.data.inventory.AssetDto;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.validation.Valid;

@Data
@NoArgsConstructor
@SuperBuilder(toBuilder = true)
public class AssetOrderItemDto extends OrderItemDto {

    @Valid
    private AssetDto asset;

}

