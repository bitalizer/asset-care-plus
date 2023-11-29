package com.knits.assetcare.controller.location;

import com.knits.assetcare.dto.api.PaginatedResponseDto;
import com.knits.assetcare.dto.data.location.LocationDto;
import com.knits.assetcare.dto.search.location.LocationSearchDto;
import com.knits.assetcare.service.location.LocationService;
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
@RequestMapping("/api/locations")
@Slf4j
public class LocationController {

    private final LocationService locationService;

    @Operation(summary = "Create new Location")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Location created", content =
                    {@Content(mediaType = "application/json", schema = @Schema(implementation = LocationDto.class))}),
            @ApiResponse(responseCode = "400", description = "Bad Request", content = {@Content(schema = @Schema(hidden = true))}),
            @ApiResponse(responseCode = "409", description = "Conflict", content = {@Content(schema = @Schema(hidden = true))}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {@Content(schema = @Schema(hidden = true))})
    })
    @PostMapping(produces = {"application/json"}, consumes = {"application/json"})
    public ResponseEntity<LocationDto> createNewLocation(@Valid @RequestBody LocationDto locationDto) {
        log.debug("REST request to create Location");
        return ResponseEntity
                .ok()
                .body(locationService.create(locationDto));
    }

    @Operation(summary = "Update Location")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Location updated", content =
                    {@Content(mediaType = "application/json", schema = @Schema(implementation = LocationDto.class))}),
            @ApiResponse(responseCode = "400", description = "Bad Request", content = {@Content(schema = @Schema(hidden = true))}),
            @ApiResponse(responseCode = "404", description = "Location not found", content = {@Content(schema = @Schema(hidden = true))}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {@Content(schema = @Schema(hidden = true))})
    })
    @PatchMapping(produces = {"application/json"}, consumes = {"application/json"})
    public ResponseEntity<LocationDto> updateLocation(@Valid @RequestBody LocationDto locationDto) {
        LocationDto locationFound = locationService.partialUpdate(locationDto);
        return ResponseEntity
                .ok()
                .body(locationFound);
    }

    @Operation(summary = "Delete Location by id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Location deleted", content =
                    {@Content(mediaType = "application/json", schema = @Schema(implementation = LocationDto.class))}),
            @ApiResponse(responseCode = "404", description = "Location not found", content = {@Content(schema = @Schema(hidden = true))}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {@Content(schema = @Schema(hidden = true))})
    })
    @DeleteMapping(value = "/{id}", produces = {"application/json"})
    public ResponseEntity<Void> deleteLocation(@PathVariable(value = "id") final Long id) {
        log.debug("REST request to delete Location : {}", id);
        locationService.delete(id);
        return ResponseEntity
                .noContent()
                .build();
    }

    @Operation(summary = "Search Locations")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Locations found", content =
                    {@Content(mediaType = "application/json", schema = @Schema(implementation = PaginatedResponseDto.class))}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {@Content(schema = @Schema(hidden = true))})
    })
    @GetMapping(produces = {"application/json"})
    public ResponseEntity<PaginatedResponseDto<LocationDto>> search(LocationSearchDto searchDto) {
        log.debug("REST request to search Locations : {}", searchDto);
        PaginatedResponseDto<LocationDto> locationsFound = locationService.search(searchDto);
        return ResponseEntity
                .ok()
                .body(locationsFound);
    }
}

