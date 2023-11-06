package com.knits.assetcare.mapper.common;

import com.knits.assetcare.dto.data.common.OrganizationDto;
import com.knits.assetcare.model.common.Organization;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface OrganizationMapper extends EntityMapper<Organization, OrganizationDto>{
}
