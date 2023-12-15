package com.knits.assetcare.dto.data.common;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CountryDto implements Serializable {

    private Long id;

    private String name;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String iso;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String iso2;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String iso3;

}
