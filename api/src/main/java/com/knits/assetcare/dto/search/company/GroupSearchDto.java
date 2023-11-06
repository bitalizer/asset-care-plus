package com.knits.assetcare.dto.search.company;

import com.knits.assetcare.dto.search.common.AbstractOrganizationStructureSearchDto;
import com.knits.assetcare.model.company.Group;
import lombok.*;
import lombok.experimental.SuperBuilder;

@Data
@EqualsAndHashCode(callSuper = true)
@SuperBuilder
@NoArgsConstructor
public class GroupSearchDto extends AbstractOrganizationStructureSearchDto<Group> {
}
