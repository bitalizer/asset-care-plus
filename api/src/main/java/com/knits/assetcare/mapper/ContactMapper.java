package com.knits.assetcare.mapper;

import com.knits.assetcare.dto.data.common.ContactDto;
import com.knits.assetcare.mapper.common.EntityMapper;
import com.knits.assetcare.model.common.Contact;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.mapstruct.ReportingPolicy;
import org.springframework.stereotype.Component;

import java.util.List;

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

    Contact toEntity(ContactDto contactDto);

    List<ContactDto> toDtos(List<Contact> contacts);

    List<Contact> toEntities(List<ContactDto> contactDtos);

}
