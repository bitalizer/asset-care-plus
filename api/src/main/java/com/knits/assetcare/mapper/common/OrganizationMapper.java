package com.knits.assetcare.mapper.common;

import com.knits.assetcare.dto.data.common.OrganizationDto;
import com.knits.assetcare.model.common.Organization;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.WARN,
        uses = {AddressMapper.class, ContactMapper.class})
public interface OrganizationMapper extends EntityMapper<Organization, OrganizationDto> {

    @Named("toOrganizationDtoDetails")
    @IgnoreAuditMapping
    @Mapping(source = "registrationCode", target = "registrationCode", ignore = true)
    @Mapping(source = "vatNumber", target = "vatNumber", ignore = true)
    @Mapping(source = "taxRegistrationCountry", target = "taxRegistrationCountry", ignore = true)
    OrganizationDto toDtoDetails(Organization organization);

    @IgnoreAuditMapping
    @Mapping(source = "description", target = "description", ignore = true)
    @Mapping(source = "contactPerson", target = "contactPerson", ignore = true)
    @Mapping(source = "legalAddress", target = "legalAddress", ignore = true)
    @Mapping(source = "taxRegistrationCountry", target = "taxRegistrationCountry", ignore = true)
    @Mapping(source = "vatNumber", target = "vatNumber", ignore = true)
    @Mapping(source = "registrationCode", target = "registrationCode", ignore = true)
    @Mapping(source = "alias", target = "alias", ignore = true)
    OrganizationDto toDto(Organization organization);
}
