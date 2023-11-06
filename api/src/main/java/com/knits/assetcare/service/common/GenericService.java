package com.knits.assetcare.service.common;

import com.knits.assetcare.dto.data.security.UserDto;
import com.knits.assetcare.model.security.User;
import com.knits.assetcare.service.security.UserService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;

@AllArgsConstructor
@NoArgsConstructor
@Slf4j
public class GenericService {

    @Autowired
    private UserService userService;

    protected void logCurrentUser(String actionPerformed) {
        log.debug("{} performed by {}", actionPerformed, userService.getCurrentUserAsDto());
    }

    protected UserDto getCurrentUserAsDto() {
        return userService.getCurrentUserAsDto();
    }

    protected User getCurrentUserAsEntity() {
        return userService.getCurrentUserAsEntity();
    }
}
