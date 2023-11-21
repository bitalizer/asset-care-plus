package com.knits.assetcare.dto.data.location;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.knits.assetcare.dto.data.common.AddressDto;
import com.knits.assetcare.dto.data.common.AbstractAuditableDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@SuperBuilder(toBuilder=true)
@AllArgsConstructor
@NoArgsConstructor
public class LocationDto extends AbstractAuditableDto {

    private String name;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private AddressDto address;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String ownership;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Boolean mapCoordinates;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String latitude;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String longitude;
}
