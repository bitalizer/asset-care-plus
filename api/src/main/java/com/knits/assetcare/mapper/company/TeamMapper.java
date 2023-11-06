package com.knits.assetcare.mapper.company;

import com.knits.assetcare.dto.data.company.TeamDto;
import com.knits.assetcare.mapper.security.UserMapper;
import com.knits.assetcare.model.company.Team;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.IGNORE,
        uses = {UserMapper.class})
public interface TeamMapper extends AbstractOrganizationStructureEntityMapper<Team,TeamDto> {
}
