package com.knits.assetcare.mapper.common;

import com.knits.assetcare.model.common.BinaryData;
import com.knits.assetcare.dto.data.common.BinaryDataDto;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.WARN)
public interface FileUploaderMapper extends EntityMapper<BinaryData, BinaryDataDto> {
}
