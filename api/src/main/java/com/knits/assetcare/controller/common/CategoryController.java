package com.knits.assetcare.controller.common;

import com.knits.assetcare.dto.api.PaginatedResponseDto;
import com.knits.assetcare.dto.data.common.CategoryDto;
import com.knits.assetcare.service.common.CategoryService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@Validated
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/categories")
@Slf4j
public class CategoryController {

    private final CategoryService categoryService;

    @Operation(summary = "Create new Category")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Category created", content =
                    {@Content(mediaType = "application/json", schema = @Schema(implementation = CategoryDto.class))}),
            @ApiResponse(responseCode = "400", description = "Bad Request", content = {@Content(schema = @Schema(hidden = true))}),
            @ApiResponse(responseCode = "409", description = "Conflict", content = {@Content(schema = @Schema(hidden = true))}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {@Content(schema = @Schema(hidden = true))})
    })
    @PostMapping(produces = {"application/json"}, consumes = {"application/json"})
    public ResponseEntity<CategoryDto> createNewCategory(@Valid @RequestBody CategoryDto categoryDto) {
        log.debug("REST request to create Category");
        return ResponseEntity
                .ok()
                .body(categoryService.saveNewCategory(categoryDto));
    }

    @Operation(summary = "Get Category by id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Category returned", content =
                    {@Content(mediaType = "application/json", schema = @Schema(implementation = CategoryDto.class))}),
            @ApiResponse(responseCode = "404", description = "Category missing"),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {@Content(schema = @Schema(hidden = true))})

    })
    @GetMapping(value = "/{id}", produces = {"application/json"})
    public ResponseEntity<CategoryDto> getCategoryById(@PathVariable(value = "id") final Long id) {
        log.debug("REST request to get Category : {}", id);
        CategoryDto categoryFound = categoryService.findCategoryById(id);
        return ResponseEntity
                .ok()
                .body(categoryFound);

    }

    @Operation(summary = "Update Category")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Category updated", content =
                    {@Content(mediaType = "application/json", schema = @Schema(implementation = CategoryDto.class))}),
            @ApiResponse(responseCode = "400", description = "Bad Request", content = {@Content(schema = @Schema(hidden = true))}),
            @ApiResponse(responseCode = "404", description = "Category not found", content = {@Content(schema = @Schema(hidden = true))}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {@Content(schema = @Schema(hidden = true))})
    })
    @PatchMapping(produces = {"application/json"}, consumes = {"application/json"})
    public ResponseEntity<CategoryDto> updateCategory(@Valid @RequestBody CategoryDto categoryDto) {
        CategoryDto categoryFound = categoryService.partialUpdate(categoryDto);
        return ResponseEntity
                .ok()
                .body(categoryFound);
    }

    @Operation(summary = "Delete Category by id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Category deleted", content =
                    {@Content(mediaType = "application/json", schema = @Schema(implementation = CategoryDto.class))}),
            @ApiResponse(responseCode = "404", description = "Category not found", content = {@Content(schema = @Schema(hidden = true))}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {@Content(schema = @Schema(hidden = true))})
    })
    @DeleteMapping(value = "/{id}", produces = {"application/json"})
    public ResponseEntity<Void> deleteCategory(@PathVariable(value = "id") final Long id) {
        log.debug("REST request to delete Category : {}", id);
        categoryService.deleteCategory(id);
        return ResponseEntity
                .noContent()
                .build();
    }

    @Operation(summary = "Get All Categories")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Categories found", content =
                    {@Content(mediaType = "application/json", schema = @Schema(implementation = PaginatedResponseDto.class))}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {@Content(schema = @Schema(hidden = true))})
    })
    @GetMapping(produces = {"application/json"})
    public ResponseEntity<List<CategoryDto>> getAllCategories() {
        log.debug("REST request to get all Categories");
        List<CategoryDto> categoriesFound = categoryService.findAllCategories();
        return ResponseEntity
                .ok()
                .body(categoriesFound);
    }
}
