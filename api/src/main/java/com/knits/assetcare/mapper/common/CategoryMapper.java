package com.knits.assetcare.mapper.common;


import com.knits.assetcare.dto.data.common.CategoryDto;
import com.knits.assetcare.model.common.Category;
import org.mapstruct.*;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.WARN)
@Component
public interface CategoryMapper extends AbstractAuditableEntityMapper<Category, CategoryDto> {

    @Named("toCategoryDtoDetails")
    @IgnoreAuditMapping
    @Mapping(target = "parentCategory", ignore = true)
    @Mapping(source = "childCategories", target = "childCategories", qualifiedByName = "toDtos")
    CategoryDto toDtoDetails(Category category);

    @IgnoreAuditMapping
    @Mapping(target = "parentCategory", ignore = true)
    @Mapping(target = "childCategories", ignore = true)
    CategoryDto toDto(Category category);

    @Named("toDtos")
    @IterableMapping(nullValueMappingStrategy = NullValueMappingStrategy.RETURN_DEFAULT)
    List<CategoryDto> toDtos(List<Category> categories);

    @IterableMapping(qualifiedByName = "toCategoryDtoDetails")
    List<CategoryDto> toDtosDetails(List<Category> categories);

}
