package com.knits.assetcare.dto.data.company;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.knits.assetcare.dto.data.common.AbstractAuditableDto;
import com.knits.assetcare.dto.validation.OnCreate;
import com.knits.assetcare.dto.validation.OnUpdate;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
@NoArgsConstructor
@SuperBuilder(toBuilder = true)
public class AbstractOrganizationStructureDto extends AbstractAuditableDto {

    @NotNull(groups = {OnCreate.class})
    @Size(min = 4, max = 50, groups = {OnCreate.class, OnUpdate.class})
    private String name;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @Size(max = 255, groups = {OnCreate.class, OnUpdate.class})
    private String description;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String startDate;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String endDate;
}
