package com.knits.assetcare.dto.data.common;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.knits.assetcare.dto.validation.OnCreate;
import com.knits.assetcare.dto.validation.OnUpdate;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

@Data
@NoArgsConstructor
@SuperBuilder(toBuilder = true)
public class CategoryDto extends AbstractAuditableDto {

    @NotNull(groups = {OnCreate.class})
    @Size(min = 4, max = 50, groups = {OnCreate.class, OnUpdate.class})
    private String name;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @Valid
    private CategoryDto parentCategory;


    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    private List<@Valid CategoryDto> childCategories;
}