package com.knits.assetcare.repository.common;

import com.knits.assetcare.model.common.Category;

import java.util.List;

public interface CategoryRepository extends ActiveEntityRepository<Category> {

    List<Category> findByParentCategoryIsNull();

}