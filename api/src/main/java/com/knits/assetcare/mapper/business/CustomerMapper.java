package com.knits.assetcare.mapper.business;

import com.knits.assetcare.dto.data.business.CustomerDto;
import com.knits.assetcare.mapper.common.BillingDetailsMapper;
import com.knits.assetcare.mapper.common.ContactMapper;
import com.knits.assetcare.mapper.common.EntityMapper;
import com.knits.assetcare.mapper.common.IgnoreAuditMapping;
import com.knits.assetcare.model.business.Customer;
import org.mapstruct.*;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.WARN,
        uses = {ContactMapper.class, BillingDetailsMapper.class})
@Component
public interface CustomerMapper extends EntityMapper<Customer, CustomerDto> {

    @Named("toCustomerDtoFullDetails")
    @IgnoreAuditMapping
    CustomerDto toDtoFullDetails(Customer customer);

    @Named("toCustomerDtoDetails")
    @IgnoreAuditMapping
    @Mapping(target = "billingDetails", ignore = true)
    CustomerDto toDtoDetails(Customer customer);

    @IgnoreAuditMapping
    @Mapping(target = "billingDetails", ignore = true)
    @Mapping(target = "type", ignore = true)
    @Mapping(target = "contact", ignore = true)
    @Mapping(target = "hourlyRate", ignore = true)
    @Mapping(target = "currency", ignore = true)
    CustomerDto toDto(Customer customer);

    Customer toEntity(CustomerDto vendorDto);

    @IterableMapping(nullValueMappingStrategy = NullValueMappingStrategy.RETURN_DEFAULT)
    List<CustomerDto> toDtos(List<Customer> customers);

    @IterableMapping(qualifiedByName = "toCustomerDtoDetails")
    List<CustomerDto> toDtosDetails(List<Customer> customers);

    List<Customer> toEntities(List<CustomerDto> customerDtos);

}
