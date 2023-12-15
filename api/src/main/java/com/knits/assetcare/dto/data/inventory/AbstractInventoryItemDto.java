package com.knits.assetcare.dto.data.inventory;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.knits.assetcare.dto.data.business.VendorDto;
import com.knits.assetcare.dto.data.common.AbstractAuditableDto;
import com.knits.assetcare.dto.data.location.LocationDto;
import com.knits.assetcare.dto.validation.OnCreate;
import com.knits.assetcare.dto.validation.OnUpdate;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.PositiveOrZero;
import javax.validation.constraints.Size;
import java.math.BigDecimal;

@Data
@NoArgsConstructor
@SuperBuilder(toBuilder = true)
public class AbstractInventoryItemDto extends AbstractAuditableDto {

    @NotNull(groups = {OnCreate.class})
    @Size(min = 4, max = 50, groups = {OnCreate.class, OnUpdate.class})
    private String name;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @Size(max = 255, groups = {OnCreate.class, OnUpdate.class})
    private String description;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @PositiveOrZero(groups = {OnUpdate.class, OnUpdate.class})
    private Integer quantity;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @PositiveOrZero(groups = {OnUpdate.class, OnUpdate.class})
    private BigDecimal price;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @Size(min = 6, max = 14, groups = {OnCreate.class, OnUpdate.class})
    private String barCode;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @Valid
    private VendorDto vendor;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @Valid
    private LocationDto location;
}
