package com.knits.assetcare.mocks.dto.business;


import com.knits.assetcare.dto.data.business.CustomerDto;
import com.knits.assetcare.model.enums.CurrencyType;

public class CustomerDtoMock {
    public static CustomerDto shallowCustomerDto(Long id) {
        return CustomerDto.builder()
                .id(id)
                .name("Mock Vendor" + id)
                .type("Mock type")
                .hourlyRate(20)
                .currency(CurrencyType.EURO)
                .active(true)
                .build();
    }
}
