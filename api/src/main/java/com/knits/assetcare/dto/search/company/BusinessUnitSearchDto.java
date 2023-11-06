package com.knits.assetcare.dto.search.company;

import com.knits.assetcare.dto.search.common.AbstractOrganizationStructureSearchDto;
import com.knits.assetcare.model.company.BusinessUnit;
import lombok.*;
import lombok.experimental.SuperBuilder;

@Data
@EqualsAndHashCode(callSuper = true)
@SuperBuilder
@NoArgsConstructor
public class BusinessUnitSearchDto extends AbstractOrganizationStructureSearchDto<BusinessUnit> {

}
