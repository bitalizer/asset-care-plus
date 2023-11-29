package com.knits.assetcare.mapper.common;

import com.knits.assetcare.dto.data.common.ContactDto;
import com.knits.assetcare.model.common.Contact;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.mapstruct.ReportingPolicy;
import org.springframework.stereotype.Component;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.WARN)
@Component
public interface ContactMapper extends EntityMapper<Contact, ContactDto> {

    @Named("toContactDtoDetails")
    @Mapping(source = "active", target = "active", ignore = true)
    ContactDto toDtoDetails(Contact contact);

    @Mapping(source = "active", target = "active", ignore = true)
    @Mapping(source = "note", target = "note", ignore = true)
    ContactDto toDto(Contact contact);


}
