package com.knits.assetcare.dto.search.company;

import com.knits.assetcare.dto.search.common.AbstractOrganizationStructureSearchDto;
import com.knits.assetcare.model.company.CostCenter;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@EqualsAndHashCode(callSuper = true)
@SuperBuilder(toBuilder=true)
@NoArgsConstructor
public class CostCenterSearchDto extends AbstractOrganizationStructureSearchDto<CostCenter> {

}
