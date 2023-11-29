package com.knits.assetcare.mapper.business;

import com.knits.assetcare.dto.data.business.VendorDto;
import com.knits.assetcare.mapper.common.EntityMapper;
import com.knits.assetcare.mapper.common.OrganizationMapper;
import com.knits.assetcare.model.business.Vendor;
import org.mapstruct.*;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.WARN,
        uses = {OrganizationMapper.class})
@Component
public interface VendorMapper extends EntityMapper<Vendor, VendorDto> {

    @Named("toVendorDtoDetails")
    @Mapping(target = "active", ignore = true)
    @Mapping(target = "organization", qualifiedByName = "toOrganizationDtoDetails")
    VendorDto toDtoDetails(Vendor vendor);

    @Mapping(source = "active", target = "active", ignore = true)
    @Mapping(target = "type", ignore = true)
    @Mapping(target = "organization", ignore = true)
    @Mapping(target = "hourlyRate", ignore = true)
    @Mapping(target = "currency", ignore = true)
    VendorDto toDto(Vendor vendor);

    @Mapping(source = "organization", target = "organization", ignore = true)
    Vendor toEntity(VendorDto vendorDto);

    @IterableMapping(nullValueMappingStrategy = NullValueMappingStrategy.RETURN_DEFAULT)
    List<VendorDto> toDtos(List<Vendor> vendors);

    @IterableMapping(qualifiedByName = "toVendorDtoDetails")
    List<VendorDto> toDtosDetails(List<Vendor> vendors);

    @Mapping(source = "organization", target = "organization", ignore = true)
    List<Vendor> toEntities(List<VendorDto> vendorDtos);

}
