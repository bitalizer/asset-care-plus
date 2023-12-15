package com.knits.assetcare.dto.data.common;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.knits.assetcare.dto.data.security.UserDto;
import com.knits.assetcare.dto.validation.OnCreate;
import com.knits.assetcare.dto.validation.OnUpdate;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;

@Data
@NoArgsConstructor
@SuperBuilder(toBuilder = true)
public class AbstractAuditableDto extends AbstractActiveDto {

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @Schema(hidden = true)
    @Null(groups = {OnCreate.class, OnUpdate.class})
    private String createdAt;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @Schema(hidden = true)
    @Null(groups = {OnCreate.class, OnUpdate.class})
    private String updatedAt;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @Schema(hidden = true)
    @NotNull(groups = {OnCreate.class})
    private UserDto createdBy;
}
