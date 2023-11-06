package com.knits.assetcare.dto.data.company;

import com.knits.assetcare.dto.data.common.AbstractAuditableDto;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.List;

@Data
@NoArgsConstructor
@SuperBuilder(toBuilder=true)
public class AbstractOrganizationStructureDto extends AbstractAuditableDto {

    private String name;
    private String description;
    private List<EmployeeDto> employees;
}
