package com.knits.assetcare.mocks.dto.company;

import com.knits.assetcare.config.Constants;
import com.knits.assetcare.dto.data.company.CostCenterDto;

import java.time.LocalDateTime;

public class CostCenterDtoMock {

    public static CostCenterDto shallowCostCenterDto(Long id) {

        return CostCenterDto.builder()
                .id(id)
                .name("Mock")
                .description("Mock description")
                .startDate(LocalDateTime.now().format(Constants.TIME_FORMATTER))
                .endDate(LocalDateTime.now().plusMonths(12).format(Constants.TIME_FORMATTER))
                .active(true)
                .build();
    }
}
