package com.knits.assetcare.controller.maintenance;

import com.knits.assetcare.dto.api.PaginatedResponseDto;
import com.knits.assetcare.dto.data.maintenance.WorkOrderDto;
import com.knits.assetcare.dto.search.maintenance.WorkOrderSearchDto;
import com.knits.assetcare.service.maintenance.WorkOrderService;
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
@RequestMapping("/api/work-orders")
@Slf4j
public class WorkOrderController {

    private final WorkOrderService workOrderService;

    @Operation(summary = "Create new WorkOrder")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "WorkOrder created", content =
                    {@Content(mediaType = "application/json", schema = @Schema(implementation = WorkOrderDto.class))}),
            @ApiResponse(responseCode = "400", description = "Bad Request", content = {@Content(schema = @Schema(hidden = true))}),
            @ApiResponse(responseCode = "409", description = "Conflict", content = {@Content(schema = @Schema(hidden = true))}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {@Content(schema = @Schema(hidden = true))})
    })
    @PostMapping(produces = {"application/json"}, consumes = {"application/json"})
    public ResponseEntity<WorkOrderDto> createNewWorkOrder(@Valid @RequestBody WorkOrderDto workOrderDto) {
        log.debug("REST request to create WorkOrder");
        return ResponseEntity
                .ok()
                .body(workOrderService.saveNewWorkOrder(workOrderDto));
    }

    @Operation(summary = "Get WorkOrder by id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "WorkOrder returned", content =
                    {@Content(mediaType = "application/json", schema = @Schema(implementation = WorkOrderDto.class))}),
            @ApiResponse(responseCode = "404", description = "WorkOrder missing"),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {@Content(schema = @Schema(hidden = true))})

    })
    @GetMapping(value = "/{id}", produces = {"application/json"})
    public ResponseEntity<WorkOrderDto> getWorkOrderById(@PathVariable(value = "id") final Long id) {
        log.debug("REST request to get WorkOrder : {}", id);
        WorkOrderDto workOrderFound = workOrderService.findWorkOrderById(id);
        return ResponseEntity
                .ok()
                .body(workOrderFound);

    }

    @Operation(summary = "Update WorkOrder")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "WorkOrder updated", content =
                    {@Content(mediaType = "application/json", schema = @Schema(implementation = WorkOrderDto.class))}),
            @ApiResponse(responseCode = "400", description = "Bad Request", content = {@Content(schema = @Schema(hidden = true))}),
            @ApiResponse(responseCode = "404", description = "WorkOrder not found", content = {@Content(schema = @Schema(hidden = true))}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {@Content(schema = @Schema(hidden = true))})
    })
    @PatchMapping(produces = {"application/json"}, consumes = {"application/json"})
    public ResponseEntity<WorkOrderDto> updateWorkOrder(@Valid @RequestBody WorkOrderDto workOrderDto) {
        WorkOrderDto workOrderFound = workOrderService.partialUpdate(workOrderDto);
        return ResponseEntity
                .ok()
                .body(workOrderFound);
    }

    @Operation(summary = "Delete WorkOrder by id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "WorkOrder deleted", content =
                    {@Content(mediaType = "application/json", schema = @Schema(implementation = WorkOrderDto.class))}),
            @ApiResponse(responseCode = "404", description = "WorkOrder not found", content = {@Content(schema = @Schema(hidden = true))}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {@Content(schema = @Schema(hidden = true))})
    })
    @DeleteMapping(value = "/{id}", produces = {"application/json"})
    public ResponseEntity<Void> deleteWorkOrder(@PathVariable(value = "id") final Long id) {
        log.debug("REST request to delete WorkOrder : {}", id);
        workOrderService.deleteWorkOrder(id);
        return ResponseEntity
                .noContent()
                .build();
    }

    @Operation(summary = "Search WorkOrders")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "WorkOrders found", content =
                    {@Content(mediaType = "application/json", schema = @Schema(implementation = PaginatedResponseDto.class))}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {@Content(schema = @Schema(hidden = true))})
    })
    @GetMapping(produces = {"application/json"})
    public ResponseEntity<PaginatedResponseDto<WorkOrderDto>> search(WorkOrderSearchDto searchDto) {
        log.debug("REST request to search WorkOrders : {}", searchDto);
        PaginatedResponseDto<WorkOrderDto> workOrdersFound = workOrderService.search(searchDto);
        return ResponseEntity
                .ok()
                .body(workOrdersFound);
    }
}
