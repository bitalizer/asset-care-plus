package com.knits.assetcare.dto.data.common;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.knits.assetcare.dto.validation.OnCreate;
import com.knits.assetcare.dto.validation.OnUpdate;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

@Data
@NoArgsConstructor
@SuperBuilder(toBuilder = true)
public class AddressDto extends AbstractActiveDto {

    @Valid
    private CountryDto country;

    private String city;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String street;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @NotNull(groups = {OnCreate.class, OnUpdate.class})
    @Pattern(regexp = "^[0-9a-zA-Z\\s-]{1,10}$", message = "Invalid postal code format", groups = {OnCreate.class, OnUpdate.class})
    private String postalCode;
}
