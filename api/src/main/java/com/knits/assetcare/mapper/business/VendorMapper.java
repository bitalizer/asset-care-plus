package com.knits.assetcare.mapper.business;

import com.knits.assetcare.dto.data.business.VendorDto;
import com.knits.assetcare.mapper.common.EntityMapper;
import com.knits.assetcare.mapper.common.IgnoreAuditMapping;
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
    @IgnoreAuditMapping
    @Mapping(target = "organization", qualifiedByName = "toOrganizationDtoDetails")
    VendorDto toDtoDetails(Vendor vendor);

    @IgnoreAuditMapping
    @Mapping(target = "type", ignore = true)
    @Mapping(target = "organization", ignore = true)
    @Mapping(target = "hourlyRate", ignore = true)
    @Mapping(target = "currency", ignore = true)
    VendorDto toDto(Vendor vendor);

    Vendor toEntity(VendorDto vendorDto);

    @IterableMapping(nullValueMappingStrategy = NullValueMappingStrategy.RETURN_DEFAULT)
    List<VendorDto> toDtos(List<Vendor> vendors);

    @IterableMapping(qualifiedByName = "toVendorDtoDetails")
    List<VendorDto> toDtosDetails(List<Vendor> vendors);

    List<Vendor> toEntities(List<VendorDto> vendorDtos);

}
