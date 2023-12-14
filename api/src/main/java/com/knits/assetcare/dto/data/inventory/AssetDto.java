package com.knits.assetcare.dto.data.inventory;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.knits.assetcare.dto.data.common.CategoryDto;
import com.knits.assetcare.model.enums.AssetStatus;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@SuperBuilder(toBuilder = true)
public class AssetDto extends AbstractInventoryItemDto {

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Boolean useAssetCare;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String notes;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private AssetStatus status;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private LocalDate purchaseDate;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private LocalDate placedInServiceDate;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private LocalDate warrantyExpirationDate;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Integer lifeTimeDays;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private CategoryDto category;

    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    @Builder.Default
    private List<PartDto> parts = new ArrayList<>();

    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    @Builder.Default
    private List<String> images = new ArrayList<>();

    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    @Builder.Default
    private List<Long> files = new ArrayList<>();

}

