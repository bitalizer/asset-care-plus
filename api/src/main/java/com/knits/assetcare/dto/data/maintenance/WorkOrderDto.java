package com.knits.assetcare.dto.data.maintenance;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.knits.assetcare.dto.data.common.AbstractAuditableDto;
import com.knits.assetcare.dto.data.common.CategoryDto;
import com.knits.assetcare.dto.data.inventory.AssetDto;
import com.knits.assetcare.model.enums.PriorityType;
import com.knits.assetcare.model.enums.WorkOrderStatus;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@NoArgsConstructor
@SuperBuilder(toBuilder = true)
public class WorkOrderDto extends AbstractAuditableDto {

    private String name;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String description;

    private PriorityType priority;

    private WorkOrderStatus status;

    private CategoryDto category;

    private AssetDto asset;

}

