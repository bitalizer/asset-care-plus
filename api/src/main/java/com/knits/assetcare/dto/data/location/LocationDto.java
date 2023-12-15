package com.knits.assetcare.dto.data.location;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.knits.assetcare.dto.data.common.AddressDto;
import com.knits.assetcare.dto.data.common.AbstractAuditableDto;
import com.knits.assetcare.dto.validation.OnCreate;
import com.knits.assetcare.dto.validation.OnUpdate;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Data
@SuperBuilder(toBuilder=true)
@AllArgsConstructor
@NoArgsConstructor
public class LocationDto extends AbstractAuditableDto {

    @NotNull(groups = {OnCreate.class})
    @Size(min = 4, max = 50, groups = {OnCreate.class, OnUpdate.class})
    private String name;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @Valid
    private AddressDto address;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @Size(max = 50, groups = {OnCreate.class, OnUpdate.class})
    private String ownership;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Boolean mapCoordinates;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @Pattern(regexp = "^-?([0-8]?\\d|90)(\\.\\d{1,10})$", message = "Invalid latitude format")
    private String latitude;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @Pattern(regexp = "^-?([0-8]?\\d|90)(\\.\\d{1,10})$", message = "Invalid latitude format")
    private String longitude;
}
