package com.knits.assetcare.dto.search.company;

import com.knits.assetcare.dto.search.common.AbstractOrganizationStructureSearchDto;
import com.knits.assetcare.model.company.Department;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@EqualsAndHashCode(callSuper = true)
@SuperBuilder
@NoArgsConstructor
public class DepartmentSearchDto extends AbstractOrganizationStructureSearchDto<Department> {

}
