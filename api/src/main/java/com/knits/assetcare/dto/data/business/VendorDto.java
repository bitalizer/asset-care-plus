package com.knits.assetcare.dto.data.business;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.knits.assetcare.dto.data.common.OrganizationDto;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@NoArgsConstructor
@SuperBuilder(toBuilder = true)
public class VendorDto extends AbstractBusinessEntityDto {

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private OrganizationDto organization;
}

