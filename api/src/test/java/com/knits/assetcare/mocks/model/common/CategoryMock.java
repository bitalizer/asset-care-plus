package com.knits.assetcare.mocks.model.common;

import com.knits.assetcare.model.common.Category;

import java.util.ArrayList;
import java.util.List;

public class CategoryMock {
    public static Category shallowCategory(Long id) {
        return Category.builder()
                .name("Category mock name")
                .build();
    }

    public static List<Category> shallowListOfCategories(int howMany) {
        List<Category> mockCategories = new ArrayList<>();
        for (int i = 0; i < howMany; i++) {
            mockCategories.add(shallowCategory((long) i));
        }
        return mockCategories;
    }
}
