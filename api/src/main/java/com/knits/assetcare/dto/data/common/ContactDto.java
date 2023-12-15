package com.knits.assetcare.dto.data.common;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@NoArgsConstructor
@SuperBuilder(toBuilder = true)
public class ContactDto extends AbstractActiveDto {

    private String firstName;

    private String lastName;

    private String email;

    private String phoneNumber;

    private String website;

    private String jobTitle;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String note;

}
