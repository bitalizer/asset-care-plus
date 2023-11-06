package com.knits.assetcare.mapper.location;

import com.knits.assetcare.dto.data.location.LocationDto;
import com.knits.assetcare.mapper.common.AddressMapper;
import com.knits.assetcare.mapper.company.AbstractAuditableEntityMapper;
import com.knits.assetcare.model.location.Location;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring",uses = {AddressMapper.class},unmappedTargetPolicy = ReportingPolicy.WARN)
public interface LocationMapper extends AbstractAuditableEntityMapper<Location,LocationDto> {
}

