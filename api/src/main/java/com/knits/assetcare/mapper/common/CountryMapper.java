
package com.knits.assetcare.mapper.common;

import com.knits.assetcare.model.common.Country;
import com.knits.assetcare.dto.data.common.CountryDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

@Mapper(componentModel = "spring")
public interface CountryMapper extends EntityMapper<Country,CountryDto> {

    @Named("toCountryDtoDetails")
    CountryDto toDtoDetails(Country country);

    @Mapping(target = "iso", ignore = true)
    @Mapping(target = "iso2", ignore = true)
    @Mapping(target = "iso3", ignore = true)
    CountryDto toDto(Country country);
}

