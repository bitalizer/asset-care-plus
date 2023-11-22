package com.knits.assetcare.mapper.common;


import com.knits.assetcare.dto.data.common.CategoryDto;
import com.knits.assetcare.model.common.Category;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.mapstruct.ReportingPolicy;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.WARN)
@Component
public interface CategoryMapper extends AbstractAuditableEntityMapper<Category, CategoryDto> {

    @IgnoreAuditMapping
    @Mapping(target = "parentCategory", ignore = true)
    CategoryDto toDto(Category category);

    @Named("toCategoryDtos")
    @IgnoreAuditMapping
    @Mapping(target = "parentCategory", ignore = true)
    List<CategoryDto> toDtos(List<Category> categories);

}
