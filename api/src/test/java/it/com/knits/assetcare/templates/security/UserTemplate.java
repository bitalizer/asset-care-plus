package it.com.knits.assetcare.templates.security;

import com.knits.assetcare.dto.data.security.UserDto;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import it.com.knits.assetcare.templates.common.EndpointTemplate;
import it.com.knits.assetcare.utils.ItTestConsts;
import org.springframework.stereotype.Component;

import static org.assertj.core.api.Assertions.assertThat;

@Component
public class UserTemplate extends EndpointTemplate {


    public UserDto login (){
        RequestSpecification request = RestAssured.given();
        request.header("Content-Type", "application/json");
        request.body(getCurrentUser());
        System.out.println("Send request to "+getBaseUrl()+"/login");
        Response response = request.post(getBaseUrl()+"/login");
        assertThat(response.getStatusCode()).isEqualTo(ItTestConsts.HTTP_SUCCESS);
        return response.getBody().as(UserDto.class);
    }

    public String loginAndGetToken (){
        return login().getToken();
    }

    public Response logout (){
        throw new UnsupportedOperationException("not implemented");
    }
    @Override
    protected String getEndpoint() {
        return "users";
    }
}
