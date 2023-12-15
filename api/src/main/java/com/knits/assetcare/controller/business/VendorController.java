package com.knits.assetcare.controller.business;

import com.knits.assetcare.dto.api.PaginatedResponseDto;
import com.knits.assetcare.dto.data.business.VendorDto;
import com.knits.assetcare.dto.search.business.VendorSearchDto;
import com.knits.assetcare.dto.validation.OnCreate;
import com.knits.assetcare.dto.validation.OnUpdate;
import com.knits.assetcare.service.business.VendorService;
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
@RequestMapping("/api/vendors")
@Slf4j
public class VendorController {

    private final VendorService vendorService;

    @Operation(summary = "Create new Vendor")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Vendor created", content =
                    {@Content(mediaType = "application/json", schema = @Schema(implementation = VendorDto.class))}),
            @ApiResponse(responseCode = "400", description = "Bad Request", content = {@Content(schema = @Schema(hidden = true))}),
            @ApiResponse(responseCode = "409", description = "Conflict", content = {@Content(schema = @Schema(hidden = true))}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {@Content(schema = @Schema(hidden = true))})
    })
    @PostMapping(produces = {"application/json"}, consumes = {"application/json"})
    @Validated(OnCreate.class)
    public ResponseEntity<VendorDto> createNewVendor(@Valid @RequestBody VendorDto vendorDto) {
        log.debug("REST request to create Vendor");
        return ResponseEntity
                .ok()
                .body(vendorService.saveNewVendor(vendorDto));
    }

    @Operation(summary = "Get Vendor by id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Vendor returned", content =
                    {@Content(mediaType = "application/json", schema = @Schema(implementation = VendorDto.class))}),
            @ApiResponse(responseCode = "404", description = "Vendor missing"),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {@Content(schema = @Schema(hidden = true))})

    })
    @GetMapping(value = "/{id}", produces = {"application/json"})
    public ResponseEntity<VendorDto> getVendorById(@PathVariable(value = "id") final Long id) {
        log.debug("REST request to get Vendor : {}", id);
        VendorDto vendorFound = vendorService.findVendorById(id);
        return ResponseEntity
                .ok()
                .body(vendorFound);

    }

    @Operation(summary = "Update Vendor")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Vendor updated", content =
                    {@Content(mediaType = "application/json", schema = @Schema(implementation = VendorDto.class))}),
            @ApiResponse(responseCode = "400", description = "Bad Request", content = {@Content(schema = @Schema(hidden = true))}),
            @ApiResponse(responseCode = "404", description = "Vendor not found", content = {@Content(schema = @Schema(hidden = true))}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {@Content(schema = @Schema(hidden = true))})
    })
    @PatchMapping(produces = {"application/json"}, consumes = {"application/json"})
    @Validated(OnUpdate.class)
    public ResponseEntity<VendorDto> updateVendor(@Valid @RequestBody VendorDto vendorDto) {
        VendorDto vendorFound = vendorService.partialUpdate(vendorDto);
        return ResponseEntity
                .ok()
                .body(vendorFound);
    }

    @Operation(summary = "Delete Vendor by id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Vendor deleted", content =
                    {@Content(mediaType = "application/json", schema = @Schema(implementation = VendorDto.class))}),
            @ApiResponse(responseCode = "404", description = "Vendor not found", content = {@Content(schema = @Schema(hidden = true))}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {@Content(schema = @Schema(hidden = true))})
    })
    @DeleteMapping(value = "/{id}", produces = {"application/json"})
    public ResponseEntity<Void> deleteVendor(@PathVariable(value = "id") final Long id) {
        log.debug("REST request to delete Vendor : {}", id);
        vendorService.deleteVendor(id);
        return ResponseEntity
                .noContent()
                .build();
    }

    @Operation(summary = "Search Vendors")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Vendors found", content =
                    {@Content(mediaType = "application/json", schema = @Schema(implementation = PaginatedResponseDto.class))}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {@Content(schema = @Schema(hidden = true))})
    })
    @GetMapping(produces = {"application/json"})
    public ResponseEntity<PaginatedResponseDto<VendorDto>> search(VendorSearchDto searchDto) {
        log.debug("REST request to search Vendors : {}", searchDto);
        PaginatedResponseDto<VendorDto> vendorsFound = vendorService.search(searchDto);
        return ResponseEntity
                .ok()
                .body(vendorsFound);
    }
}
