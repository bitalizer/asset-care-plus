package com.knits.assetcare.mapper.common;

import com.knits.assetcare.dto.data.common.AddressDto;
import com.knits.assetcare.model.common.Address;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.IGNORE,
        uses = {CountryMapper.class})
public interface AddressMapper extends EntityMapper<Address, AddressDto> {
}
