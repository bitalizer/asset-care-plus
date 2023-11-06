package com.knits.assetcare.mocks.dto.common;


import com.knits.assetcare.dto.data.common.OrganizationDto;

public class OrganizationDtoMock {
    public static OrganizationDto shallowOrganizationDto(Long id) {
        return OrganizationDto.builder()
                .id(id)
                .name("Mock Organization"+id)
                .build();
    }
}
