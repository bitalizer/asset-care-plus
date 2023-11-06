package com.knits.assetcare.dto.data.company;

import com.knits.assetcare.dto.data.common.AbstractActiveDto;
import com.knits.assetcare.dto.data.common.OrganizationDto;
import com.knits.assetcare.dto.data.location.LocationDto;
import com.knits.assetcare.model.enums.Gender;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.List;

@Data
@NoArgsConstructor
@SuperBuilder(toBuilder=true)
public class EmployeeDto extends AbstractActiveDto {

    private String firstName;
    private String lastName;
    private String email;
    private String birthDate;
    private Gender gender;
    private String startDate;
    private String endDate;
    private String companyPhone;
    private String companyMobileNumber;
    private String role;
    private OrganizationDto organization;
    private LocationDto office;
    private BusinessUnitDto businessUnit;
    private JobTitleDto jobTitle;
    private DepartmentDto department;
    private DivisionDto division;
    private List<GroupDto> groups;
    private TeamDto team;
    private CostCenterDto costCenter;
    private EmployeeDto solidLineManager;
}