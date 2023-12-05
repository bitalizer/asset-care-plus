package com.knits.assetcare.service.maintenance;


import com.knits.assetcare.dto.api.PaginatedResponseDto;
import com.knits.assetcare.dto.data.maintenance.WorkRequestDto;
import com.knits.assetcare.dto.search.maintenance.WorkRequestSearchDto;
import com.knits.assetcare.exceptions.UserException;
import com.knits.assetcare.mapper.maintenance.WorkRequestMapper;
import com.knits.assetcare.model.maintenance.WorkRequest;
import com.knits.assetcare.repository.maintenance.WorkRequestRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
@Transactional
@Slf4j
@AllArgsConstructor
public class WorkRequestService {

    private final WorkRequestMapper workRequestMapper;
    private final WorkRequestRepository workRequestRepository;

    public WorkRequestDto saveNewWorkRequest(WorkRequestDto workRequestDto) {
        WorkRequest workRequest = workRequestMapper.toEntity(workRequestDto);
        WorkRequest savedWorkRequest = workRequestRepository.save(workRequest);
        return workRequestMapper.toDto(savedWorkRequest);
    }

    public WorkRequestDto findWorkRequestById(Long id) {
        WorkRequest workRequest = workRequestRepository.findById(id).orElseThrow(() -> new UserException("WorkRequest#" + id + " not found"));
        return workRequestMapper.toDtoDetails(workRequest);
    }

    public WorkRequestDto partialUpdate(WorkRequestDto workRequestDto) {
        WorkRequest workRequest = workRequestRepository.findById(workRequestDto.getId()).orElseThrow(() -> new UserException("WorkRequest#" + workRequestDto.getId() + " not found"));

        workRequestMapper.partialUpdate(workRequest, workRequestDto);
        workRequestRepository.save(workRequest);
        return workRequestMapper.toDto(workRequest);
    }

    public void deleteWorkRequest(Long id) {
        WorkRequest workRequest = workRequestRepository.findById(id).orElseThrow(() -> new UserException("WorkRequest#" + id + " not found"));
        workRequestRepository.delete(workRequest);
    }

    public PaginatedResponseDto<WorkRequestDto> search(WorkRequestSearchDto searchDto) {

        Page<WorkRequest> workRequestsPage = workRequestRepository.findAll(searchDto.getSpecification(), searchDto.getPageable());
        List<WorkRequestDto> workRequestDtos = workRequestMapper.toDtos(workRequestsPage.getContent());

        return PaginatedResponseDto.<WorkRequestDto>builder()
                .page(searchDto.getPage())
                .size(workRequestDtos.size())
                .sortingFields(searchDto.getSort())
                .sortDirection(searchDto.getDir().name())
                .data(workRequestDtos)
                .build();
    }
}


