package com.knits.assetcare.service.common;


import com.knits.assetcare.dto.data.common.CategoryDto;
import com.knits.assetcare.exceptions.UserException;
import com.knits.assetcare.mapper.common.CategoryMapper;
import com.knits.assetcare.model.common.Category;
import com.knits.assetcare.repository.common.CategoryRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.annotation.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
@Transactional
@CacheConfig(cacheNames = "categories")
@Slf4j
@AllArgsConstructor
public class CategoryService {

    private final CategoryMapper categoryMapper;
    private final CategoryRepository categoryRepository;

    public CategoryDto saveNewCategory(CategoryDto categoryDto) {
        Category category = categoryMapper.toEntity(categoryDto);
        Category savedCategory = categoryRepository.save(category);
        return categoryMapper.toDtoDetails(savedCategory);
    }

    @Cacheable(key = "#id", unless = "#result == null")
    public CategoryDto findCategoryById(Long id) {
        Category category = categoryRepository.findById(id).orElseThrow(() -> new UserException("Category#" + id + " not found"));
        return categoryMapper.toDtoDetails(category);
    }

    @CachePut(key = "#result.id")
    public CategoryDto partialUpdate(CategoryDto categoryDto) {
        Category category = categoryRepository.findById(categoryDto.getId()).orElseThrow(() -> new UserException("Category#" + categoryDto.getId() + " not found"));

        categoryMapper.partialUpdate(category, categoryDto);
        categoryRepository.save(category);
        return categoryMapper.toDtoDetails(category);
    }

    @Caching(
            evict = {
                    @CacheEvict(key = "#id"),
                    @CacheEvict(key = "'allCategories'", allEntries = true)
            }
    )
    public void deleteCategory(Long id) {
        Category category = categoryRepository.findById(id).orElseThrow(() -> new UserException("Category#" + id + " not found"));
        categoryRepository.delete(category);
    }

    @Cacheable(key = "'allCategories'", unless = "#result.isEmpty()")
    public List<CategoryDto> findAllCategories() {

        List<Category> categories = categoryRepository.findByParentCategoryIsNull();
        return categoryMapper.toDtosDetails(categories);
    }
}


