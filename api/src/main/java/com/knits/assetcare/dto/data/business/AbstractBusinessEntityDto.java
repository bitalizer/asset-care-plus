package com.knits.assetcare.dto.data.business;

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

    private Integer hourlyRate;

    private CurrencyType currency;
}
