package com.knits.assetcare.mapper.company;

import com.knits.assetcare.dto.data.company.GroupDto;
import com.knits.assetcare.mapper.security.UserMapper;
import com.knits.assetcare.model.company.Group;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.IGNORE,
        uses = {UserMapper.class})
public interface GroupMapper extends AbstractOrganizationStructureEntityMapper<Group, GroupDto> {


}
