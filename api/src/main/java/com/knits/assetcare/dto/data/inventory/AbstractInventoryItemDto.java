package com.knits.assetcare.dto.data.inventory;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.knits.assetcare.dto.data.business.VendorDto;
import com.knits.assetcare.dto.data.common.AbstractAuditableDto;
import com.knits.assetcare.dto.data.location.LocationDto;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@SuperBuilder(toBuilder = true)
public class AbstractInventoryItemDto extends AbstractAuditableDto {

    private String name;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String description;

    private Long quantity;

    private BigDecimal price;

    private String barCode;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private VendorDto vendor;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private LocationDto location;
}
