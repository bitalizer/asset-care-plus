package com.knits.assetcare.dto.data.business;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.knits.assetcare.dto.data.common.AbstractActiveDto;
import com.knits.assetcare.model.enums.CurrencyType;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@NoArgsConstructor
@SuperBuilder(toBuilder = true)
public class AbstractBusinessEntityDto extends AbstractActiveDto {


    private String name;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String type;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Integer hourlyRate;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private CurrencyType currency;


}
