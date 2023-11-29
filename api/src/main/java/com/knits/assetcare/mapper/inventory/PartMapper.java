package com.knits.assetcare.mapper.inventory;


import com.knits.assetcare.dto.data.inventory.PartDto;
import com.knits.assetcare.mapper.common.EntityMapper;
import com.knits.assetcare.mapper.common.IgnoreAuditMapping;
import com.knits.assetcare.mapper.business.VendorMapper;
import com.knits.assetcare.mapper.location.LocationMapper;
import com.knits.assetcare.model.inventory.Part;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.mapstruct.ReportingPolicy;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.WARN,
        uses = {VendorMapper.class, LocationMapper.class})
@Component
public interface PartMapper extends EntityMapper<Part, PartDto> {

    @Named("toPartDtoDetails")
    @IgnoreAuditMapping
    @Mapping(source = "vendor", target = "vendor")
    @Mapping(source = "asset", target = "asset", ignore = true)
    @Mapping(source = "location", target = "location", qualifiedByName = "toLocationDtoDetails")
    PartDto toDtoDetails(Part part);

    @IgnoreAuditMapping
    @Mapping(source = "vendor", target = "vendor", ignore = true)
    @Mapping(source = "asset", target = "asset", ignore = true)
    PartDto toDto(Part part);

    @IgnoreAuditMapping
    Part toEntity(PartDto partDto);

    @IgnoreAuditMapping
    @Mapping(source = "asset", target = "asset", ignore = true)
    List<PartDto> toDtos(List<Part> parts);

    @Named("toPartDtosDetails")
    @IgnoreAuditMapping
    @Mapping(source = "vendor", target = "vendor")
    @Mapping(source = "asset", target = "asset", ignore = true)
    @Mapping(source = "location", target = "location", qualifiedByName = "toLocationDtoDetails")
    List<PartDto> toDtosDetails(List<Part> parts);

    @IgnoreAuditMapping
    @Mapping(source = "asset", target = "asset", ignore = true)
    List<Part> toEntities(List<PartDto> partDtos);

}
