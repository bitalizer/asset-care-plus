package com.knits.assetcare.mocks.model.company;

import com.knits.assetcare.model.company.BusinessUnit;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class BusinessUnitMock {

    public static BusinessUnit shallowBusinessUnit(Long counter) {
        return BusinessUnit.builder()
                .id(counter)
                .name("Mock Business Unit name"+counter)
                .description("Mock Business Unit description"+counter)
                .startDate(LocalDateTime.now())
                .endDate(LocalDateTime.now().plusMonths(12))
                .active(true)
                .build();
    }

    public static List<BusinessUnit> shallowList(int howMany) {
        List<BusinessUnit> mockUsers = new ArrayList<>();
        for (int i = 0; i < howMany; i++) {
            mockUsers.add(shallowBusinessUnit(Long.valueOf(i)));
        }
        return mockUsers;
    }
}
