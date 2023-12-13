package com.knits.assetcare.mapper.common;

import com.knits.assetcare.dto.data.common.AddressDto;
import com.knits.assetcare.model.common.Address;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.IGNORE,
        uses = {CountryMapper.class})
public interface AddressMapper extends EntityMapper<Address, AddressDto> {

    @Named("toAddressDtoDetails")
    @Mapping(target = "active", ignore = true)
    AddressDto toDtoDetails(Address address);

    @Mapping(target = "active", ignore = true)
    @Mapping(source = "street", target = "street", ignore = true)
    @Mapping(source = "postalCode", target = "postalCode", ignore = true)
    AddressDto toDto(Address address);

}
