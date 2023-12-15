package com.knits.assetcare.dto.api;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PaginatedResponseDto<T>{

    private int page;
    private int size;
    private long totalElements;
    private int totalPages;
    private String sortingFields;
    private String sortDirection;
    private List<T> data;

}
