package com.knits.assetcare.dto.data.company;

import com.knits.assetcare.dto.data.common.AbstractActiveDto;
import com.knits.assetcare.dto.data.common.BinaryDataDto;
import com.knits.assetcare.dto.data.security.UserDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ContractDto extends AbstractActiveDto {
    private BinaryDataDto binaryData;
    private UserDto createdBy;
    private EmployeeDto employee;
    private LocalDateTime createdAt;
}
