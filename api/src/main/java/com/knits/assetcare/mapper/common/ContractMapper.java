package com.knits.assetcare.mapper.common;

import com.knits.assetcare.dto.data.company.ContractDto;
import com.knits.assetcare.mapper.company.EmployeeMapper;
import com.knits.assetcare.mapper.security.UserMapper;
import com.knits.assetcare.model.company.Contract;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.WARN,
        uses = {UserMapper.class, EmployeeMapper.class})
public interface ContractMapper extends EntityMapper<Contract, ContractDto> {
}
