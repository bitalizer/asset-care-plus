package com.knits.assetcare.mapper.security;

import com.knits.assetcare.dto.data.security.RoleDto;
import com.knits.assetcare.mapper.common.EntityMapper;
import com.knits.assetcare.model.security.Role;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.WARN)
public interface RolerMapper extends EntityMapper<Role, RoleDto> {



}