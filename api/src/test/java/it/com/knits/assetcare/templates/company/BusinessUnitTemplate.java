package it.com.knits.assetcare.templates.company;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.knits.assetcare.dto.api.PaginatedResponseDto;
import com.knits.assetcare.dto.data.company.BusinessUnitDto;
import io.restassured.response.Response;
import it.com.knits.assetcare.templates.common.EndpointTemplate;
import it.com.knits.assetcare.utils.ItTestConsts;
import org.springframework.stereotype.Component;

import static org.assertj.core.api.Assertions.assertThat;

@Component
public class BusinessUnitTemplate extends EndpointTemplate {

    public BusinessUnitDto create(String token, BusinessUnitDto expected) {
        Response response = httpPost(token, expected, ItTestConsts.HTTP_SUCCESS);
        BusinessUnitDto actual = response.getBody().as(BusinessUnitDto.class);
        assertThat(actual).usingRecursiveComparison().ignoringFields("id","startDate","endDate").isEqualTo(expected);
        return actual;
    }

    public BusinessUnitDto findById(String token, Long id) {
        Response response = httpGetPathParams(token, String.valueOf(id), ItTestConsts.HTTP_SUCCESS);
        return response.getBody().as(BusinessUnitDto.class);
    }

    public BusinessUnitDto partialUpdate(String token, BusinessUnitDto expected) {
        Response response = httpPatch(token, expected, ItTestConsts.HTTP_SUCCESS);
        BusinessUnitDto actual = response.getBody().as(BusinessUnitDto.class);
        assertThat(actual).usingRecursiveComparison().isEqualTo(expected);
        return actual;
    }

    public PaginatedResponseDto<BusinessUnitDto> search(String token, String queryString) throws JsonProcessingException {
        Response response = httpGetQueryString(token, queryString, ItTestConsts.HTTP_SUCCESS);
        TypeReference<PaginatedResponseDto<BusinessUnitDto>> typeRef = new TypeReference<PaginatedResponseDto<BusinessUnitDto>>() {};
        ObjectMapper om = new ObjectMapper();
        return om.readValue(response.getBody().asString(), typeRef);
    }

    @Override
    protected String getEndpoint() {
        return "business-units";
    }


}
