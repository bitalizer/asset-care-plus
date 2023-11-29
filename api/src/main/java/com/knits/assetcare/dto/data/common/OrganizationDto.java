package com.knits.assetcare.dto.data.common;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.knits.assetcare.dto.data.company.AbstractOrganizationStructureDto;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@NoArgsConstructor
@SuperBuilder(toBuilder=true)
public class OrganizationDto extends AbstractOrganizationStructureDto {

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String alias;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String vatNumber;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String registrationCode;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private CountryDto taxRegistrationCountry;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private AddressDto legalAddress;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private ContactDto contactPerson;

}
