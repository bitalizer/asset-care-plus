package com.knits.assetcare.mapper.company;

import com.knits.assetcare.mapper.security.UserMapper;
import com.knits.assetcare.model.company.BusinessUnit;
import com.knits.assetcare.dto.data.company.BusinessUnitDto;
import org.mapstruct.*;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.IGNORE,
        uses = {UserMapper.class})
public interface BusinessUnitMapper extends AbstractOrganizationStructureEntityMapper<BusinessUnit, BusinessUnitDto> {

}
