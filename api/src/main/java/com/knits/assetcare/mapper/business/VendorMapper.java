package com.knits.assetcare.mapper.business;

import com.knits.assetcare.dto.data.business.VendorDto;
import com.knits.assetcare.mapper.common.EntityMapper;
import com.knits.assetcare.mapper.common.OrganizationMapper;
import com.knits.assetcare.model.business.Vendor;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.mapstruct.ReportingPolicy;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.WARN,
        uses = {OrganizationMapper.class})
@Component
public interface VendorMapper extends EntityMapper<Vendor, VendorDto> {

    @Named("toVendorDtoDetails")
    @Mapping(source = "active", target = "active", ignore = true)
    @Mapping(source = "organization", target = "organization")
    VendorDto toDtoDetails(Vendor vendor);

    @Mapping(source = "active", target = "active", ignore = true)
    @Mapping(source = "organization", target = "organization", ignore = true)
    VendorDto toDto(Vendor vendor);

    @Mapping(source = "organization", target = "organization", ignore = true)
    Vendor toEntity(VendorDto vendorDto);

    @Mapping(source = "organization", target = "organization", ignore = true)
    List<VendorDto> toDtos(List<Vendor> vendors);

    @Mapping(source = "organization", target = "organization", ignore = true)
    List<Vendor> toEntities(List<VendorDto> vendorDtos);

}
