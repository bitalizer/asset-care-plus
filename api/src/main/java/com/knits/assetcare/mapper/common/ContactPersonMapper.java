package com.knits.assetcare.mapper.common;

import com.knits.assetcare.dto.data.common.ContactDto;
import com.knits.assetcare.model.common.Contact;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ContactPersonMapper extends EntityMapper<Contact, ContactDto> {


}
