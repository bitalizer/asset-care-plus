package com.knits.assetcare.service.common;

import com.knits.assetcare.dto.data.common.BinaryDataDto;
import com.knits.assetcare.mapper.common.FileUploaderMapper;
import com.knits.assetcare.model.common.BinaryData;
import com.knits.assetcare.repository.common.FileUploaderRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Slf4j
@Service
public class FileUploaderService {

    @Autowired
    private FileUploaderRepository repository;

    @Autowired
    protected FileUploaderMapper mapper;


    public BinaryDataDto upload(MultipartFile file) throws IOException {
        BinaryDataDto fileUploaderDto = new BinaryDataDto();
        fileUploaderDto.setSize(file.getSize());
        fileUploaderDto.setTitle(file.getOriginalFilename());
        fileUploaderDto.setContentType(file.getContentType());
        fileUploaderDto.setBytes(file.getBytes());
        BinaryData fileUploader = mapper.toEntity(fileUploaderDto);
        repository.save(fileUploader);
        return mapper.toDto(fileUploader);
    }
}
