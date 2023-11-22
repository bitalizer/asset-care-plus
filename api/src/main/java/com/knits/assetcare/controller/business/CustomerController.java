package com.knits.assetcare.controller.business;

import com.knits.assetcare.dto.api.PaginatedResponseDto;
import com.knits.assetcare.dto.data.business.CustomerDto;
import com.knits.assetcare.dto.search.business.CustomerSearchDto;
import com.knits.assetcare.service.business.CustomerService;
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
@RequestMapping("/api/customers")
@Slf4j
public class CustomerController {

    private final CustomerService customerService;

    @Operation(summary = "Create new Customer")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Customer created", content =
                    {@Content(mediaType = "application/json", schema = @Schema(implementation = CustomerDto.class))}),
            @ApiResponse(responseCode = "400", description = "Bad Request", content = {@Content(schema = @Schema(hidden = true))}),
            @ApiResponse(responseCode = "409", description = "Conflict", content = {@Content(schema = @Schema(hidden = true))}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {@Content(schema = @Schema(hidden = true))})
    })
    @PostMapping(produces = {"application/json"}, consumes = {"application/json"})
    public ResponseEntity<CustomerDto> createNewCustomer(@Valid @RequestBody CustomerDto customerDto) {
        log.debug("REST request to create Customer");
        return ResponseEntity
                .ok()
                .body(customerService.saveNewCustomer(customerDto));
    }

    @Operation(summary = "Get Customer by id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Customer returned", content =
                    {@Content(mediaType = "application/json", schema = @Schema(implementation = CustomerDto.class))}),
            @ApiResponse(responseCode = "404", description = "Customer missing"),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {@Content(schema = @Schema(hidden = true))})

    })
    @GetMapping(value = "/{id}", produces = {"application/json"})
    public ResponseEntity<CustomerDto> getCustomerById(@PathVariable(value = "id") final Long id) {
        log.debug("REST request to get Customer : {}", id);
        CustomerDto customerFound = customerService.findCustomerById(id);
        return ResponseEntity
                .ok()
                .body(customerFound);

    }

    @Operation(summary = "Update Customer")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Customer updated", content =
                    {@Content(mediaType = "application/json", schema = @Schema(implementation = CustomerDto.class))}),
            @ApiResponse(responseCode = "400", description = "Bad Request", content = {@Content(schema = @Schema(hidden = true))}),
            @ApiResponse(responseCode = "404", description = "Customer not found", content = {@Content(schema = @Schema(hidden = true))}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {@Content(schema = @Schema(hidden = true))})
    })
    @PatchMapping(produces = {"application/json"}, consumes = {"application/json"})
    public ResponseEntity<CustomerDto> updateCustomer(@Valid @RequestBody CustomerDto customerDto) {
        CustomerDto customerFound = customerService.partialUpdate(customerDto);
        return ResponseEntity
                .ok()
                .body(customerFound);
    }

    @Operation(summary = "Delete Customer by id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Customer deleted", content =
                    {@Content(mediaType = "application/json", schema = @Schema(implementation = CustomerDto.class))}),
            @ApiResponse(responseCode = "404", description = "Customer not found", content = {@Content(schema = @Schema(hidden = true))}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {@Content(schema = @Schema(hidden = true))})
    })
    @DeleteMapping(value = "/{id}", produces = {"application/json"})
    public ResponseEntity<Void> deleteCustomer(@PathVariable(value = "id") final Long id) {
        log.debug("REST request to delete Customer : {}", id);
        customerService.deleteCustomer(id);
        return ResponseEntity
                .noContent()
                .build();
    }

    @Operation(summary = "Search Customers")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Customers found", content =
                    {@Content(mediaType = "application/json", schema = @Schema(implementation = PaginatedResponseDto.class))}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {@Content(schema = @Schema(hidden = true))})
    })
    @GetMapping(produces = {"application/json"})
    public ResponseEntity<PaginatedResponseDto<CustomerDto>> search(CustomerSearchDto searchDto) {
        log.debug("REST request to search Customers : {}", searchDto);
        PaginatedResponseDto<CustomerDto> customersFound = customerService.search(searchDto);
        return ResponseEntity
                .ok()
                .body(customersFound);
    }
}
