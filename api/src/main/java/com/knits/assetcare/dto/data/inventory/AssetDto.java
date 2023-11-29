package com.knits.assetcare.dto.data.inventory;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.knits.assetcare.dto.data.common.CategoryDto;
import com.knits.assetcare.model.enums.AssetStatus;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.time.LocalDate;
import java.util.List;

@Data
@NoArgsConstructor
@SuperBuilder(toBuilder = true)
public class AssetDto extends AbstractInventoryItemDto {

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Boolean useAssetCare;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String notes;

    private AssetStatus status;

    private LocalDate purchaseDate;

    private LocalDate placedInServiceDate;

    private LocalDate warrantyExpirationDate;

    private Integer lifeTimeDays;

    private CategoryDto category;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private List<PartDto> parts;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private List<String> images;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private List<Long> files;

}

