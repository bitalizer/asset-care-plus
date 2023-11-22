package com.knits.assetcare.mapper.business;

import com.knits.assetcare.dto.data.business.CustomerDto;
import com.knits.assetcare.mapper.common.ContactMapper;
import com.knits.assetcare.mapper.common.EntityMapper;
import com.knits.assetcare.mapper.common.OrganizationMapper;
import com.knits.assetcare.model.business.Customer;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.mapstruct.ReportingPolicy;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.WARN,
        uses = {ContactMapper.class})
@Component
public interface CustomerMapper extends EntityMapper<Customer, CustomerDto> {

    @Named("toCustomerDtoDetails")
    @Mapping(target = "active", ignore = true)
    CustomerDto toDtoDetails(Customer vendor);

    @Mapping(target = "active", ignore = true)
    @Mapping(target = "billingDetails", ignore = true)
    CustomerDto toDto(Customer vendor);

    Customer toEntity(CustomerDto vendorDto);

    List<CustomerDto> toDtos(List<Customer> vendors);

    List<Customer> toEntities(List<CustomerDto> vendorDtos);

}
