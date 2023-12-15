package com.knits.assetcare.dto.data.inventory;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.validation.Valid;

@Data
@NoArgsConstructor
@SuperBuilder(toBuilder = true)
public class PartDto extends AbstractInventoryItemDto {

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @Valid
    private AssetDto asset;
}

