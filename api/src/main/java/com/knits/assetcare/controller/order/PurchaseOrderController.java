package com.knits.assetcare.controller.order;

import com.knits.assetcare.dto.api.PaginatedResponseDto;
import com.knits.assetcare.dto.data.order.PurchaseOrderDto;
import com.knits.assetcare.dto.search.order.PurchaseOrderSearchDto;
import com.knits.assetcare.service.order.PurchaseOrderService;
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
@RequestMapping("/api/purchase-orders")
@Slf4j
public class PurchaseOrderController {

    private final PurchaseOrderService purchaseOrderService;

    @Operation(summary = "Create new PurchaseOrder")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "PurchaseOrder created", content =
                    {@Content(mediaType = "application/json", schema = @Schema(implementation = PurchaseOrderDto.class))}),
            @ApiResponse(responseCode = "400", description = "Bad Request", content = {@Content(schema = @Schema(hidden = true))}),
            @ApiResponse(responseCode = "409", description = "Conflict", content = {@Content(schema = @Schema(hidden = true))}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {@Content(schema = @Schema(hidden = true))})
    })
    @PostMapping(produces = {"application/json"}, consumes = {"application/json"})
    public ResponseEntity<PurchaseOrderDto> createNewPurchaseOrder(@Valid @RequestBody PurchaseOrderDto purchaseOrderDto) {
        log.debug("REST request to create PurchaseOrder");
        return ResponseEntity
                .ok()
                .body(purchaseOrderService.saveNewPurchaseOrder(purchaseOrderDto));
    }

    @Operation(summary = "Get PurchaseOrder by id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "PurchaseOrder returned", content =
                    {@Content(mediaType = "application/json", schema = @Schema(implementation = PurchaseOrderDto.class))}),
            @ApiResponse(responseCode = "404", description = "PurchaseOrder missing"),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {@Content(schema = @Schema(hidden = true))})

    })
    @GetMapping(value = "/{id}", produces = {"application/json"})
    public ResponseEntity<PurchaseOrderDto> getPurchaseOrderById(@PathVariable(value = "id") final Long id) {
        log.debug("REST request to get PurchaseOrder : {}", id);
        PurchaseOrderDto purchaseOrderFound = purchaseOrderService.findPurchaseOrderById(id);
        return ResponseEntity
                .ok()
                .body(purchaseOrderFound);

    }

    @Operation(summary = "Update PurchaseOrder")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "PurchaseOrder updated", content =
                    {@Content(mediaType = "application/json", schema = @Schema(implementation = PurchaseOrderDto.class))}),
            @ApiResponse(responseCode = "400", description = "Bad Request", content = {@Content(schema = @Schema(hidden = true))}),
            @ApiResponse(responseCode = "404", description = "PurchaseOrder not found", content = {@Content(schema = @Schema(hidden = true))}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {@Content(schema = @Schema(hidden = true))})
    })
    @PatchMapping(produces = {"application/json"}, consumes = {"application/json"})
    public ResponseEntity<PurchaseOrderDto> updatePurchaseOrder(@Valid @RequestBody PurchaseOrderDto purchaseOrderDto) {
        PurchaseOrderDto purchaseOrderFound = purchaseOrderService.partialUpdate(purchaseOrderDto);
        return ResponseEntity
                .ok()
                .body(purchaseOrderFound);
    }

    @Operation(summary = "Delete PurchaseOrder by id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "PurchaseOrder deleted", content =
                    {@Content(mediaType = "application/json", schema = @Schema(implementation = PurchaseOrderDto.class))}),
            @ApiResponse(responseCode = "404", description = "PurchaseOrder not found", content = {@Content(schema = @Schema(hidden = true))}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {@Content(schema = @Schema(hidden = true))})
    })
    @DeleteMapping(value = "/{id}", produces = {"application/json"})
    public ResponseEntity<Void> deletePurchaseOrder(@PathVariable(value = "id") final Long id) {
        log.debug("REST request to delete PurchaseOrder : {}", id);
        purchaseOrderService.deletePurchaseOrder(id);
        return ResponseEntity
                .noContent()
                .build();
    }

    @Operation(summary = "Search PurchaseOrders")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "PurchaseOrders found", content =
                    {@Content(mediaType = "application/json", schema = @Schema(implementation = PaginatedResponseDto.class))}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {@Content(schema = @Schema(hidden = true))})
    })
    @GetMapping(produces = {"application/json"})
    public ResponseEntity<PaginatedResponseDto<PurchaseOrderDto>> search(PurchaseOrderSearchDto searchDto) {
        log.debug("REST request to search PurchaseOrders : {}", searchDto);
        PaginatedResponseDto<PurchaseOrderDto> purchaseOrdersFound = purchaseOrderService.search(searchDto);
        return ResponseEntity
                .ok()
                .body(purchaseOrdersFound);
    }
}
