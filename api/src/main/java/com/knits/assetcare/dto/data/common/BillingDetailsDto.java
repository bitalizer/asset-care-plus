package com.knits.assetcare.dto.data.common;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.knits.assetcare.dto.validation.OnCreate;
import com.knits.assetcare.dto.validation.OnUpdate;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
@NoArgsConstructor
@SuperBuilder(toBuilder = true)
public class BillingDetailsDto extends AbstractActiveDto {

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @NotNull(groups = {OnCreate.class, OnUpdate.class})
    @Size(min = 4, max = 50, groups = {OnCreate.class, OnUpdate.class})
    private String shipToName;

    @NotNull(groups = {OnCreate.class, OnUpdate.class})
    @Size(min = 4, max = 50, groups = {OnCreate.class, OnUpdate.class})
    private String companyName;

    private String phoneNumber;

    private String fax;

    @Valid
    private AddressDto address;
}