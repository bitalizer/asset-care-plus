package com.knits.assetcare.dto.data.common;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.knits.assetcare.dto.validation.OnCreate;
import com.knits.assetcare.dto.validation.OnUpdate;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;
import javax.validation.constraints.PositiveOrZero;
import java.io.Serializable;

@Data
@NoArgsConstructor
@SuperBuilder(toBuilder = true)
public abstract class AbstractActiveDto implements Serializable {

    @NotNull(groups = {OnUpdate.class})
    @Null(groups = {OnCreate.class})
    @PositiveOrZero(groups = {OnUpdate.class})
    private Long id;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Boolean active;
}
