package com.knits.assetcare.dto.data.company;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.knits.assetcare.dto.data.common.AbstractAuditableDto;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@NoArgsConstructor
@SuperBuilder(toBuilder = true)
public class AbstractOrganizationStructureDto extends AbstractAuditableDto {

    private String name;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String description;
}
