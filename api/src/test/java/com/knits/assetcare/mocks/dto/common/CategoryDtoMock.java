package com.knits.assetcare.mocks.dto.common;

import com.knits.assetcare.dto.data.common.CategoryDto;

public class CategoryDtoMock {

    public static CategoryDto shallowCategoryDto(Long id){

        return CategoryDto.builder()
                .id(id)
                .name("Category mock name")
                .build();
    }

}
