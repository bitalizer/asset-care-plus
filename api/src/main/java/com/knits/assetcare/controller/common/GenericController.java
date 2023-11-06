package com.knits.assetcare.controller.common;

import com.knits.assetcare.dto.data.common.AbstractActiveDto;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class GenericController {

    protected void checkCreateRequest (AbstractActiveDto dto){
        if(dto.getId()!=null){
            log.warn("Detected create Request for {} with provided id {} ",dto.getClass().getName(),dto.getId());
            dto.setId(null);
        }
    }
}
