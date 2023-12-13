package com.knits.assetcare.mocks.model.business;

import com.knits.assetcare.model.business.Vendor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class VendorMock {

    private static final LocalDateTime CREATED_AT_DATE = LocalDateTime.of(2023, 1, 1, 0, 0);
    private static final LocalDateTime UPDATED_AT_DATE = LocalDateTime.of(2023, 11, 1, 0, 0);


    public static Vendor shallowVendor(Long id) {
        return Vendor.builder()
                .id(id)
                .name("Mock Vendor name" + id)
                .description("Mock Vendor description" + id)
                .createdAt(CREATED_AT_DATE)
                .updatedAt(UPDATED_AT_DATE)
                .hourlyRate(20)
                .active(true)
                .build();
    }

    public static List<Vendor> shallowListOfVendors(int howMany) {
        List<Vendor> mockVendors = new ArrayList<>();
        for (int i = 0; i < howMany; i++) {
            mockVendors.add(shallowVendor((long) i));
        }
        return mockVendors;
    }
}
