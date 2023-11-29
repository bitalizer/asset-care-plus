package com.knits.assetcare.dto.data.business;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.knits.assetcare.dto.data.common.BillingDetailsDto;
import com.knits.assetcare.dto.data.common.ContactDto;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@NoArgsConstructor
@SuperBuilder(toBuilder=true)
public class CustomerDto extends AbstractBusinessEntityDto {

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private ContactDto contact;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private BillingDetailsDto billingDetails;

}

