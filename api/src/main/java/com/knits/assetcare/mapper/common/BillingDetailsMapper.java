package com.knits.assetcare.mapper.common;


import com.knits.assetcare.dto.data.common.BillingDetailsDto;
import com.knits.assetcare.dto.data.common.CategoryDto;
import com.knits.assetcare.model.common.BillingDetails;
import com.knits.assetcare.model.common.Category;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;
import org.springframework.stereotype.Component;

@Mapper(componentModel = "spring", uses = {AddressMapper.class}, unmappedTargetPolicy = ReportingPolicy.WARN)
@Component
public interface BillingDetailsMapper extends EntityMapper<BillingDetails, BillingDetailsDto> {

    @Mapping(target = "active", ignore = true)
    CategoryDto toDto(Category category);

}
