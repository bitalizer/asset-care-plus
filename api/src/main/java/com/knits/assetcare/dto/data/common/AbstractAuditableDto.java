package com.knits.assetcare.dto.data.common;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.knits.assetcare.dto.data.security.UserDto;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@NoArgsConstructor
@SuperBuilder(toBuilder = true)
public class AbstractAuditableDto extends AbstractActiveDto {

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String startDate;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String endDate;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String createdAt;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String updatedAt;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private UserDto createdBy;
}
