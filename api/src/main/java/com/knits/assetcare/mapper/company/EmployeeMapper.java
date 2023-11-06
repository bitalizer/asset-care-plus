package com.knits.assetcare.mapper.company;

import com.knits.assetcare.config.Constants;
import com.knits.assetcare.dto.data.company.EmployeeDto;
import com.knits.assetcare.mapper.common.EntityMapper;
import com.knits.assetcare.mapper.common.OrganizationMapper;
import com.knits.assetcare.mapper.location.LocationMapper;

import com.knits.assetcare.model.company.Employee;
import org.mapstruct.*;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.IGNORE,
        uses = {OrganizationMapper.class, DivisionMapper.class, BusinessUnitMapper.class,
                CostCenterMapper.class, GroupMapper.class, JobTitleMapper.class, TeamMapper.class,
                DepartmentMapper.class, LocationMapper.class})
public interface EmployeeMapper extends EntityMapper<Employee, EmployeeDto> {

    @Override
    @Mapping(source = "birthDate", target = "birthDate", dateFormat = Constants.DATE_FORMAT_DD_MM_YYYY)
    @Mapping(source = "startDate", target = "startDate", dateFormat = Constants.DATE_FORMAT_DD_MM_YYYY)
    @Mapping(source = "endDate", target = "endDate", dateFormat = Constants.DATE_FORMAT_DD_MM_YYYY)
    @Mapping(target = "solidLineManager", ignore = true)
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    EmployeeDto toDto(Employee entity);

    @Override
    @Mapping(source = "birthDate", target = "birthDate", dateFormat = Constants.DATE_FORMAT_DD_MM_YYYY)
    @Mapping(source = "startDate", target = "startDate", dateFormat = Constants.DATE_FORMAT_DD_MM_YYYY)
    @Mapping(source = "endDate", target = "endDate", dateFormat = Constants.DATE_FORMAT_DD_MM_YYYY)
    @Mapping(target = "solidLineManager", ignore = true)
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    Employee toEntity(EmployeeDto dto);


    @Mapping(source = "birthDate", target = "birthDate", dateFormat = Constants.DATE_FORMAT_DD_MM_YYYY)
    @Mapping(source = "startDate", target = "startDate", dateFormat = Constants.DATE_FORMAT_DD_MM_YYYY)
    @Mapping(source = "endDate", target = "endDate", dateFormat = Constants.DATE_FORMAT_DD_MM_YYYY)
    @Mapping(target = "solidLineManager", ignore = true)
    @IterableMapping(nullValueMappingStrategy = NullValueMappingStrategy.RETURN_DEFAULT)
    List<Employee> toEntities(List<EmployeeDto> entityList);


}
