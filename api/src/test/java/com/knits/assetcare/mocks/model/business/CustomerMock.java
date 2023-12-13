package com.knits.assetcare.mocks.model.business;

import com.knits.assetcare.model.business.Customer;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class CustomerMock {

    private static final LocalDateTime CREATED_AT_DATE = LocalDateTime.of(2023, 1, 1, 0, 0);
    private static final LocalDateTime UPDATED_AT_DATE = LocalDateTime.of(2023, 11, 1, 0, 0);

    public static Customer shallowCustomer(Long id) {
        return Customer.builder()
                .id(id)
                .name("Mock Customer name" + id)
                .description("Mock Customer description" + id)
                .createdAt(CREATED_AT_DATE)
                .updatedAt(UPDATED_AT_DATE)
                .hourlyRate(20)
                .active(true)
                .build();
    }

    public static List<Customer> shallowListOfCustomers(int howMany) {
        List<Customer> mockCustomers = new ArrayList<>();
        for (int i = 0; i < howMany; i++) {
            mockCustomers.add(shallowCustomer((long) i));
        }
        return mockCustomers;
    }
}
