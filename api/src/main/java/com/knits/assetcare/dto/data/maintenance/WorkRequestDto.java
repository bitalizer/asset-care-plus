package com.knits.assetcare.dto.data.maintenance;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.knits.assetcare.dto.data.common.AbstractAuditableDto;
import com.knits.assetcare.model.enums.PriorityType;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.List;

@Data
@NoArgsConstructor
@SuperBuilder(toBuilder = true)
public class WorkRequestDto extends AbstractAuditableDto {

    private String name;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String description;

    private PriorityType priority;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private List<String> images;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private List<Long> files;

}

