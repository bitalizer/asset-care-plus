package com.knits.assetcare.service.common;

import com.knits.assetcare.dto.data.common.CategoryDto;
import com.knits.assetcare.exceptions.UserException;
import com.knits.assetcare.mapper.common.CategoryMapper;
import com.knits.assetcare.mapper.common.CategoryMapperImpl;
import com.knits.assetcare.mocks.dto.common.CategoryDtoMock;
import com.knits.assetcare.mocks.model.common.CategoryMock;
import com.knits.assetcare.model.common.Category;
import com.knits.assetcare.repository.common.CategoryRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.*;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class CategoryServiceTest {

    @Mock
    private CategoryRepository categoryRepository;

    @Spy
    private static CategoryMapper categoryMapper = new CategoryMapperImpl();

    @Captor
    private ArgumentCaptor<Category> categoryArgumentCaptor;

    @InjectMocks
    private CategoryService categoryService;

    @Test
    @DisplayName("Save new Category Success")
    void saveNewCategory() {

        final Long mockId = 1L;
        final Long categoryGeneratedId = 2L;

        CategoryDto toSaveDto = CategoryDtoMock.shallowCategoryDto(null);
        toSaveDto.setChildCategories(List.of(CategoryDto.builder().id(mockId).build()));

        when(categoryRepository.save(Mockito.any(Category.class)))
                .thenAnswer(invocation -> {
                    Category category = invocation.getArgument(0);
                    category.setId(categoryGeneratedId);
                    return category;
                });

        CategoryDto savedDto = categoryService.saveNewCategory(toSaveDto);

        verify(categoryRepository).save(categoryArgumentCaptor.capture());
        Category toSaveEntity = categoryArgumentCaptor.getValue();

        verify(categoryMapper, times(1)).toEntity(toSaveDto);
        verify(categoryMapper, times(1)).toDtoDetails(toSaveEntity);
        verify(categoryRepository, times(1)).save(toSaveEntity);

        assertThat(toSaveDto).isEqualTo(savedDto);
    }

    @Test
    @DisplayName("findById Category Success")
    void findCategoryById() {

        Category toFind = CategoryMock.shallowCategory(1L);

        when(categoryRepository.findById(toFind.getId())).thenReturn(Optional.of(toFind));

        CategoryDto foundDto = categoryService.findCategoryById(toFind.getId());

        verify(categoryRepository, times(1)).findById(toFind.getId());
        verify(categoryMapper, times(1)).toDtoDetails(toFind);

        assertNotNull(foundDto);
    }

    @Test
    @DisplayName("find ById Category Not Found")
    void findCategoryByIdNotFound() {

        Long CategoryId = 1L;

        when(categoryRepository.findById(CategoryId)).thenReturn(Optional.empty());

        assertThrows(UserException.class, () -> categoryService.findCategoryById(CategoryId));

        verify(categoryRepository, times(1)).findById(any());
        verifyNoInteractions(categoryMapper);
    }


    @Test
    @DisplayName("partial update Category Success")
    void partialUpdateCategory() {


        CategoryDto toUpdateDto = CategoryDtoMock.shallowCategoryDto(1L);

        when(categoryRepository.findById(toUpdateDto.getId())).thenReturn(Optional.of(new Category()));
        when(categoryRepository.save(Mockito.any(Category.class)))
                .thenAnswer(invocation -> invocation.getArgument(0));

        CategoryDto savedDto = categoryService.partialUpdate(toUpdateDto);

        verify(categoryRepository).save(categoryArgumentCaptor.capture());
        Category toUpdateEntity = categoryArgumentCaptor.getValue();

        verify(categoryRepository, times(1)).save(toUpdateEntity);
        verify(categoryMapper, times(1)).toDtoDetails(toUpdateEntity);

        assertThat(toUpdateDto).isEqualTo(savedDto);
    }

    @Test
    @DisplayName("delete Category Success")
    void deleteCategoryById() {

        Category toDelete = CategoryMock.shallowCategory(1L);

        when(categoryRepository.findById(toDelete.getId())).thenReturn(Optional.of(toDelete));

        categoryService.deleteCategory(toDelete.getId());

        verify(categoryRepository, times(1)).findById(toDelete.getId());
        verify(categoryRepository, times(1)).delete(categoryArgumentCaptor.capture());

        Category toDeleteEntity = categoryArgumentCaptor.getValue();

        assertThat(toDeleteEntity).isEqualTo(toDelete);
    }

    @Test
    @DisplayName("delete Category Not Found")
    void deleteCategoryByIdNotFound() {
        Long CategoryId = 1L;

        when(categoryRepository.findById(CategoryId)).thenReturn(Optional.empty());

        assertThrows(UserException.class, () -> categoryService.deleteCategory(CategoryId));

        verify(categoryRepository, times(1)).findById(CategoryId);
        verify(categoryRepository, never()).delete(any());
        verifyNoInteractions(categoryMapper);
    }

    @Test
    @DisplayName("get all Categories Success")
    void getAllSuccess() {
        List<Category> categories = CategoryMock.shallowListOfCategories(25);

        // Set to each category
        long childCategoryId = categories.size() + 1;
        for (Category category : categories) {
            category.setChildCategories(List.of(Category.builder().id(childCategoryId++).build()));
        }

        when(categoryRepository.findByParentCategoryIsNull()).thenReturn(categories);

        List<CategoryDto> allCategories = categoryService.findAllCategories();

        verify(categoryRepository, times(1)).findByParentCategoryIsNull();
        verify(categoryMapper, times(1)).toDtosDetails(categories);

        assertThat(allCategories.size()).isEqualTo(categories.size());
    }
}