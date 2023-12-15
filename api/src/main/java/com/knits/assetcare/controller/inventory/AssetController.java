package com.knits.assetcare.controller.inventory;

import com.knits.assetcare.dto.api.PaginatedResponseDto;
import com.knits.assetcare.dto.data.inventory.AssetDto;
import com.knits.assetcare.dto.search.inventory.AssetSearchDto;
import com.knits.assetcare.dto.validation.OnCreate;
import com.knits.assetcare.dto.validation.OnUpdate;
import com.knits.assetcare.service.inventory.AssetService;
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


@Validated
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/assets")
@Slf4j
public class AssetController {

    private final AssetService assetService;

    @Operation(summary = "Create new Asset")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Asset created", content =
                    {@Content(mediaType = "application/json", schema = @Schema(implementation = AssetDto.class))}),
            @ApiResponse(responseCode = "400", description = "Bad Request", content = {@Content(schema = @Schema(hidden = true))}),
            @ApiResponse(responseCode = "409", description = "Conflict", content = {@Content(schema = @Schema(hidden = true))}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {@Content(schema = @Schema(hidden = true))})
    })
    @PostMapping(produces = {"application/json"}, consumes = {"application/json"})
    @Validated(OnCreate.class)
    public ResponseEntity<AssetDto> createNewAsset(@Valid @RequestBody AssetDto assetDto) {
        log.debug("REST request to create Asset");
        return ResponseEntity
                .ok()
                .body(assetService.saveNewAsset(assetDto));
    }

    @Operation(summary = "Get Asset by id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Asset returned", content =
                    {@Content(mediaType = "application/json", schema = @Schema(implementation = AssetDto.class))}),
            @ApiResponse(responseCode = "404", description = "Asset missing"),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {@Content(schema = @Schema(hidden = true))})

    })
    @GetMapping(value = "/{id}", produces = {"application/json"})
    public ResponseEntity<AssetDto> getAssetById(@PathVariable(value = "id") final Long id) {
        log.debug("REST request to get Asset : {}", id);
        AssetDto assetFound = assetService.findAssetById(id);
        return ResponseEntity
                .ok()
                .body(assetFound);

    }

    @Operation(summary = "Update Asset")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Asset updated", content =
                    {@Content(mediaType = "application/json", schema = @Schema(implementation = AssetDto.class))}),
            @ApiResponse(responseCode = "400", description = "Bad Request", content = {@Content(schema = @Schema(hidden = true))}),
            @ApiResponse(responseCode = "404", description = "Asset not found", content = {@Content(schema = @Schema(hidden = true))}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {@Content(schema = @Schema(hidden = true))})
    })
    @PatchMapping(produces = {"application/json"}, consumes = {"application/json"})
    @Validated(OnUpdate.class)
    public ResponseEntity<AssetDto> updateAsset(@Valid @RequestBody AssetDto assetDto) {
        AssetDto assetFound = assetService.partialUpdate(assetDto);
        return ResponseEntity
                .ok()
                .body(assetFound);
    }

    @Operation(summary = "Delete Asset by id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Asset deleted", content =
                    {@Content(mediaType = "application/json", schema = @Schema(implementation = AssetDto.class))}),
            @ApiResponse(responseCode = "404", description = "Asset not found", content = {@Content(schema = @Schema(hidden = true))}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {@Content(schema = @Schema(hidden = true))})
    })
    @DeleteMapping(value = "/{id}", produces = {"application/json"})
    public ResponseEntity<Void> deleteAsset(@PathVariable(value = "id") final Long id) {
        log.debug("REST request to delete Asset : {}", id);
        assetService.deleteAsset(id);
        return ResponseEntity
                .noContent()
                .build();
    }

    @Operation(summary = "Search Assets")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Assets found", content =
                    {@Content(mediaType = "application/json", schema = @Schema(implementation = PaginatedResponseDto.class))}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {@Content(schema = @Schema(hidden = true))})
    })
    @GetMapping(produces = {"application/json"})
    public ResponseEntity<PaginatedResponseDto<AssetDto>> search(AssetSearchDto searchDto) {
        log.debug("REST request to search Assets : {}", searchDto);
        PaginatedResponseDto<AssetDto> assetsFound = assetService.search(searchDto);
        return ResponseEntity
                .ok()
                .body(assetsFound);
    }
}
