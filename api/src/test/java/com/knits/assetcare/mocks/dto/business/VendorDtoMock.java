package com.knits.assetcare.mocks.dto.business;


import com.knits.assetcare.dto.data.business.VendorDto;
import com.knits.assetcare.model.enums.CurrencyType;

public class VendorDtoMock {
    public static VendorDto shallowVendorDto(Long id) {
        return VendorDto.builder()
                .id(id)
                .name("Mock Vendor" + id)
                .type("Mock type")
                .hourlyRate(20)
                .currency(CurrencyType.EURO)
                .active(true)
                .build();
    }
}
