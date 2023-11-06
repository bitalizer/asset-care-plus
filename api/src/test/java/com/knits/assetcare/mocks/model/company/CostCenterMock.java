package com.knits.assetcare.mocks.model.company;

import com.knits.assetcare.model.company.CostCenter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class CostCenterMock {

    public static CostCenter shallowCostCenter(Long counter) {
        return CostCenter.builder()
                .id(counter)
                .name("Mock CostCenter name"+counter)
                .description("Mock CostCenter description"+counter)
                .startDate(LocalDateTime.now())
                .endDate(LocalDateTime.now().plusMonths(12))
                .active(true)
                .build();
    }

    public static List<CostCenter> shallowListOfUsers(int howMany) {
        List<CostCenter> mockUsers = new ArrayList<>();
        for (int i = 0; i < howMany; i++) {
            mockUsers.add(shallowCostCenter(Long.valueOf(i)));
        }
        return mockUsers;
    }
}
