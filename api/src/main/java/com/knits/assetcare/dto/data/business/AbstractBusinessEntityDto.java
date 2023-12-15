package com.knits.assetcare.dto.data.business;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.knits.assetcare.dto.data.common.AbstractAuditableDto;
import com.knits.assetcare.dto.validation.EnumValidator;
import com.knits.assetcare.dto.validation.OnCreate;
import com.knits.assetcare.dto.validation.OnUpdate;
import com.knits.assetcare.model.enums.CurrencyType;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.PositiveOrZero;
import javax.validation.constraints.Size;

@Data
@NoArgsConstructor
@SuperBuilder(toBuilder = true)
public class AbstractBusinessEntityDto extends AbstractAuditableDto {

    @NotNull(groups = {OnCreate.class})
    @Size(min = 4, max = 50, groups = {OnCreate.class, OnUpdate.class})
    private String name;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @Size(max = 50, groups = {OnCreate.class, OnUpdate.class})
    private String type;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @NotNull(groups = {OnCreate.class, OnUpdate.class})
    @PositiveOrZero(groups = {OnCreate.class, OnUpdate.class})
    private Integer hourlyRate;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @NotNull(groups = {OnCreate.class, OnUpdate.class})
    @EnumValidator(enumClass = CurrencyType.class, groups = {OnCreate.class, OnUpdate.class})
    private CurrencyType currency;

}
