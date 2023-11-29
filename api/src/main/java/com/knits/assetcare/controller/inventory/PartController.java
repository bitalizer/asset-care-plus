package com.knits.assetcare.controller.inventory;

import com.knits.assetcare.dto.api.PaginatedResponseDto;
import com.knits.assetcare.dto.data.inventory.PartDto;
import com.knits.assetcare.dto.search.inventory.PartSearchDto;
import com.knits.assetcare.service.inventory.PartService;
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
@RequestMapping("/api/parts")
@Slf4j
public class PartController {

    private final PartService partService;

    @Operation(summary = "Create new Part")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Part created", content =
                    {@Content(mediaType = "application/json", schema = @Schema(implementation = PartDto.class))}),
            @ApiResponse(responseCode = "400", description = "Bad Request", content = {@Content(schema = @Schema(hidden = true))}),
            @ApiResponse(responseCode = "409", description = "Conflict", content = {@Content(schema = @Schema(hidden = true))}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {@Content(schema = @Schema(hidden = true))})
    })
    @PostMapping(produces = {"application/json"}, consumes = {"application/json"})
    public ResponseEntity<PartDto> createNewPart(@Valid @RequestBody PartDto partDto) {
        log.debug("REST request to create Part");
        return ResponseEntity
                .ok()
                .body(partService.saveNewPart(partDto));
    }

    @Operation(summary = "Get Part by id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Part returned", content =
                    {@Content(mediaType = "application/json", schema = @Schema(implementation = PartDto.class))}),
            @ApiResponse(responseCode = "404", description = "Part missing"),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {@Content(schema = @Schema(hidden = true))})

    })
    @GetMapping(value = "/{id}", produces = {"application/json"})
    public ResponseEntity<PartDto> getPartById(@PathVariable(value = "id") final Long id) {
        log.debug("REST request to get Part : {}", id);
        PartDto partFound = partService.findPartById(id);
        return ResponseEntity
                .ok()
                .body(partFound);

    }

    @Operation(summary = "Update Part")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Part updated", content =
                    {@Content(mediaType = "application/json", schema = @Schema(implementation = PartDto.class))}),
            @ApiResponse(responseCode = "400", description = "Bad Request", content = {@Content(schema = @Schema(hidden = true))}),
            @ApiResponse(responseCode = "404", description = "Part not found", content = {@Content(schema = @Schema(hidden = true))}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {@Content(schema = @Schema(hidden = true))})
    })
    @PatchMapping(produces = {"application/json"}, consumes = {"application/json"})
    public ResponseEntity<PartDto> updatePart(@Valid @RequestBody PartDto partDto) {
        PartDto partFound = partService.partialUpdate(partDto);
        return ResponseEntity
                .ok()
                .body(partFound);
    }

    @Operation(summary = "Delete Part by id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Part deleted", content =
                    {@Content(mediaType = "application/json", schema = @Schema(implementation = PartDto.class))}),
            @ApiResponse(responseCode = "404", description = "Part not found", content = {@Content(schema = @Schema(hidden = true))}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {@Content(schema = @Schema(hidden = true))})
    })
    @DeleteMapping(value = "/{id}", produces = {"application/json"})
    public ResponseEntity<Void> deletePart(@PathVariable(value = "id") final Long id) {
        log.debug("REST request to delete Part : {}", id);
        partService.deletePart(id);
        return ResponseEntity
                .noContent()
                .build();
    }

    @Operation(summary = "Search Parts")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Parts found", content =
                    {@Content(mediaType = "application/json", schema = @Schema(implementation = PaginatedResponseDto.class))}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {@Content(schema = @Schema(hidden = true))})
    })
    @GetMapping(produces = {"application/json"})
    public ResponseEntity<PaginatedResponseDto<PartDto>> search(PartSearchDto searchDto) {
        log.debug("REST request to search Parts : {}", searchDto);
        PaginatedResponseDto<PartDto> partsFound = partService.search(searchDto);
        return ResponseEntity
                .ok()
                .body(partsFound);
    }
}
