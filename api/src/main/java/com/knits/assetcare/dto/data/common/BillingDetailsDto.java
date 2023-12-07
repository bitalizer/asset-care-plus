package com.knits.assetcare.dto.data.common;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@NoArgsConstructor
@SuperBuilder(toBuilder = true)
public class BillingDetailsDto extends AbstractActiveDto {

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String shipToName;

    private String companyName;

    private String phoneNumber;

    private String fax;

    private AddressDto address;
}