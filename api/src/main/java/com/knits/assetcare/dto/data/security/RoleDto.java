package com.knits.assetcare.dto.data.security;

import com.knits.assetcare.dto.data.common.AbstractActiveDto;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@NoArgsConstructor
@SuperBuilder(toBuilder=true)
@Data
public class RoleDto extends AbstractActiveDto {

    private String name;
}
