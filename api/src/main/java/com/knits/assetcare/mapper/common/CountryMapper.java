
package com.knits.assetcare.mapper.common;

import com.knits.assetcare.model.common.Country;
import com.knits.assetcare.dto.data.common.CountryDto;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CountryMapper extends EntityMapper<Country,CountryDto> {

}

