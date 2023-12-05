package com.knits.assetcare.controller.maintenance;

import com.knits.assetcare.dto.api.PaginatedResponseDto;
import com.knits.assetcare.dto.data.maintenance.WorkRequestDto;
import com.knits.assetcare.dto.search.maintenance.WorkRequestSearchDto;
import com.knits.assetcare.service.maintenance.WorkRequestService;
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
@RequestMapping("/api/requests")
@Slf4j
public class WorkRequestController {

    private final WorkRequestService workRequestService;

    @Operation(summary = "Create new WorkRequest")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "WorkRequest created", content =
                    {@Content(mediaType = "application/json", schema = @Schema(implementation = WorkRequestDto.class))}),
            @ApiResponse(responseCode = "400", description = "Bad Request", content = {@Content(schema = @Schema(hidden = true))}),
            @ApiResponse(responseCode = "409", description = "Conflict", content = {@Content(schema = @Schema(hidden = true))}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {@Content(schema = @Schema(hidden = true))})
    })
    @PostMapping(produces = {"application/json"}, consumes = {"application/json"})
    public ResponseEntity<WorkRequestDto> createNewWorkRequest(@Valid @RequestBody WorkRequestDto workRequestDto) {
        log.debug("REST request to create WorkRequest");
        return ResponseEntity
                .ok()
                .body(workRequestService.saveNewWorkRequest(workRequestDto));
    }

    @Operation(summary = "Get WorkRequest by id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "WorkRequest returned", content =
                    {@Content(mediaType = "application/json", schema = @Schema(implementation = WorkRequestDto.class))}),
            @ApiResponse(responseCode = "404", description = "WorkRequest missing"),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {@Content(schema = @Schema(hidden = true))})

    })
    @GetMapping(value = "/{id}", produces = {"application/json"})
    public ResponseEntity<WorkRequestDto> getWorkRequestById(@PathVariable(value = "id") final Long id) {
        log.debug("REST request to get WorkRequest : {}", id);
        WorkRequestDto workRequestFound = workRequestService.findWorkRequestById(id);
        return ResponseEntity
                .ok()
                .body(workRequestFound);

    }

    @Operation(summary = "Update WorkRequest")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "WorkRequest updated", content =
                    {@Content(mediaType = "application/json", schema = @Schema(implementation = WorkRequestDto.class))}),
            @ApiResponse(responseCode = "400", description = "Bad Request", content = {@Content(schema = @Schema(hidden = true))}),
            @ApiResponse(responseCode = "404", description = "WorkRequest not found", content = {@Content(schema = @Schema(hidden = true))}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {@Content(schema = @Schema(hidden = true))})
    })
    @PatchMapping(produces = {"application/json"}, consumes = {"application/json"})
    public ResponseEntity<WorkRequestDto> updateWorkRequest(@Valid @RequestBody WorkRequestDto workRequestDto) {
        WorkRequestDto workRequestFound = workRequestService.partialUpdate(workRequestDto);
        return ResponseEntity
                .ok()
                .body(workRequestFound);
    }

    @Operation(summary = "Delete WorkRequest by id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "WorkRequest deleted", content =
                    {@Content(mediaType = "application/json", schema = @Schema(implementation = WorkRequestDto.class))}),
            @ApiResponse(responseCode = "404", description = "WorkRequest not found", content = {@Content(schema = @Schema(hidden = true))}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {@Content(schema = @Schema(hidden = true))})
    })
    @DeleteMapping(value = "/{id}", produces = {"application/json"})
    public ResponseEntity<Void> deleteWorkRequest(@PathVariable(value = "id") final Long id) {
        log.debug("REST request to delete WorkRequest : {}", id);
        workRequestService.deleteWorkRequest(id);
        return ResponseEntity
                .noContent()
                .build();
    }

    @Operation(summary = "Search WorkRequests")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "WorkRequests found", content =
                    {@Content(mediaType = "application/json", schema = @Schema(implementation = PaginatedResponseDto.class))}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {@Content(schema = @Schema(hidden = true))})
    })
    @GetMapping(produces = {"application/json"})
    public ResponseEntity<PaginatedResponseDto<WorkRequestDto>> search(WorkRequestSearchDto searchDto) {
        log.debug("REST request to search WorkRequests : {}", searchDto);
        PaginatedResponseDto<WorkRequestDto> workRequestsFound = workRequestService.search(searchDto);
        return ResponseEntity
                .ok()
                .body(workRequestsFound);
    }
}
