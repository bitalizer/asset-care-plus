package com.knits.assetcare.mapper.location;

import com.knits.assetcare.dto.data.location.LocationDto;
import com.knits.assetcare.mapper.common.AddressMapper;
import com.knits.assetcare.mapper.company.AbstractAuditableEntityMapper;
import com.knits.assetcare.model.location.Location;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring",uses = {AddressMapper.class},unmappedTargetPolicy = ReportingPolicy.WARN)
public interface LocationMapper extends AbstractAuditableEntityMapper<Location,LocationDto> {
    @Named("toLocationDtoDetails")
    @Mapping(source = "active", target = "active", ignore = true)
    @Mapping(source = "ownership", target = "ownership", ignore = true)
    @Mapping(source = "mapCoordinates", target = "mapCoordinates", ignore = true)
    @Mapping(source = "latitude", target = "latitude", ignore = true)
    @Mapping(source = "longitude", target = "longitude", ignore = true)
    LocationDto toDtoDetails(Location location);

    @Mapping(source = "active", target = "active", ignore = true)
    @Mapping(source = "address", target = "address", ignore = true)
    @Mapping(source = "ownership", target = "ownership", ignore = true)
    @Mapping(source = "mapCoordinates", target = "mapCoordinates", ignore = true)
    @Mapping(source = "latitude", target = "latitude", ignore = true)
    @Mapping(source = "longitude", target = "longitude", ignore = true)
    LocationDto toDto(Location location);
}

