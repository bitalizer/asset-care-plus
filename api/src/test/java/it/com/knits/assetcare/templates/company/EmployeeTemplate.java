package it.com.knits.assetcare.templates.company;

import com.knits.assetcare.dto.data.company.EmployeeDto;
import io.restassured.response.Response;
import it.com.knits.assetcare.templates.common.EndpointTemplate;
import it.com.knits.assetcare.utils.ItTestConsts;
import org.springframework.stereotype.Component;

import static org.assertj.core.api.Assertions.assertThat;

@Component
public class EmployeeTemplate extends EndpointTemplate {

    public EmployeeDto create (String token,EmployeeDto expected){
        Response response= httpPost(token, expected, ItTestConsts.HTTP_SUCCESS);
        EmployeeDto actual = response.getBody().as(EmployeeDto.class);
        assertThat(actual).usingRecursiveComparison().isEqualTo(expected);
        return actual;
    }

    public EmployeeDto update (String token,EmployeeDto expected){
        Response response= httpPut(token, expected, ItTestConsts.HTTP_SUCCESS);
        EmployeeDto actual = response.getBody().as(EmployeeDto.class);
        assertThat(actual).usingRecursiveComparison().isEqualTo(expected);
        return actual;
    }

    public EmployeeDto partialUpdate (String token,EmployeeDto expected){
        Response response= httpPatch(token, expected, ItTestConsts.HTTP_SUCCESS);
        EmployeeDto actual = response.getBody().as(EmployeeDto.class);
        assertThat(actual).usingRecursiveComparison().isEqualTo(expected);
        return actual;
    }
    @Override
    protected String getEndpoint() {
        return "employees";
    }
}
