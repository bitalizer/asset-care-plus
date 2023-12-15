package com.knits.assetcare.dto.data.inventory;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.knits.assetcare.dto.data.common.CategoryDto;
import com.knits.assetcare.dto.validation.EnumValidator;
import com.knits.assetcare.dto.validation.OnCreate;
import com.knits.assetcare.dto.validation.OnUpdate;
import com.knits.assetcare.model.enums.AssetStatus;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.PastOrPresent;
import javax.validation.constraints.PositiveOrZero;
import javax.validation.constraints.Size;
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
    @Size(max = 255, groups = {OnCreate.class, OnUpdate.class})
    private String notes;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @NotNull(groups = {OnCreate.class, OnUpdate.class})
    @EnumValidator(enumClass = AssetStatus.class, groups = {OnCreate.class, OnUpdate.class})
    private AssetStatus status;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @PastOrPresent(groups = {OnCreate.class, OnUpdate.class})
    private LocalDate purchaseDate;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @PastOrPresent(groups = {OnCreate.class, OnUpdate.class})
    private LocalDate placedInServiceDate;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private LocalDate warrantyExpirationDate;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @PositiveOrZero(groups = {OnCreate.class, OnUpdate.class})
    private Integer lifeTimeDays;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @Valid
    private CategoryDto category;

    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    @Builder.Default
    private List<@Valid PartDto> parts = new ArrayList<>();

    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    @Builder.Default
    private List<String> images = new ArrayList<>();

    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    @Builder.Default
    private List<Long> files = new ArrayList<>();

}

