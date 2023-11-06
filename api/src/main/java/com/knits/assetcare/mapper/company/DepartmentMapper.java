package com.knits.assetcare.mapper.company;

import com.knits.assetcare.dto.data.company.DepartmentDto;
import com.knits.assetcare.mapper.security.UserMapper;
import com.knits.assetcare.model.company.Department;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.IGNORE,
        uses = {UserMapper.class})
public interface DepartmentMapper extends AbstractOrganizationStructureEntityMapper<Department, DepartmentDto> {

}
