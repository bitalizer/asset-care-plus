package com.knits.assetcare.dto.data.maintenance;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.knits.assetcare.dto.data.common.AbstractAuditableDto;
import com.knits.assetcare.dto.validation.EnumValidator;
import com.knits.assetcare.dto.validation.OnCreate;
import com.knits.assetcare.dto.validation.OnUpdate;
import com.knits.assetcare.model.enums.PriorityType;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

@Data
@NoArgsConstructor
@SuperBuilder(toBuilder = true)
public class WorkRequestDto extends AbstractAuditableDto {

    @NotNull(groups = {OnCreate.class})
    @Size(min = 4, max = 50, groups = {OnCreate.class, OnUpdate.class})
    private String name;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @Size(max = 255, groups = {OnCreate.class, OnUpdate.class})
    private String description;

    @NotNull(groups = {OnCreate.class, OnUpdate.class})
    @EnumValidator(enumClass = PriorityType.class, groups = {OnCreate.class, OnUpdate.class})
    private PriorityType priority;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private List<String> images;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private List<Long> files;

}

