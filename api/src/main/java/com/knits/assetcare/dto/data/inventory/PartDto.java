package com.knits.assetcare.dto.data.inventory;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@NoArgsConstructor
@SuperBuilder(toBuilder=true)
public class PartDto extends AbstractInventoryItemDto {

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private AssetDto asset;
}

