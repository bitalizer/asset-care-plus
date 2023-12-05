package com.knits.assetcare.service.maintenance;


import com.knits.assetcare.dto.api.PaginatedResponseDto;
import com.knits.assetcare.dto.data.maintenance.WorkOrderDto;
import com.knits.assetcare.dto.search.maintenance.WorkOrderSearchDto;
import com.knits.assetcare.exceptions.UserException;

import com.knits.assetcare.mapper.maintenance.WorkOrderMapper;
import com.knits.assetcare.model.maintenance.WorkOrder;
import com.knits.assetcare.repository.maintenance.WorkOrderRepository;
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
public class WorkOrderService {

    private final WorkOrderMapper workOrderMapper;
    private final WorkOrderRepository workOrderRepository;

    public WorkOrderDto saveNewWorkOrder(WorkOrderDto workOrderDto) {
        WorkOrder workOrder = workOrderMapper.toEntity(workOrderDto);
        WorkOrder savedWorkOrder = workOrderRepository.save(workOrder);
        return workOrderMapper.toDto(savedWorkOrder);
    }

    public WorkOrderDto findWorkOrderById(Long id) {
        WorkOrder workOrder = workOrderRepository.findById(id).orElseThrow(() -> new UserException("WorkOrder#" + id + " not found"));
        return workOrderMapper.toDtoDetails(workOrder);
    }

    public WorkOrderDto partialUpdate(WorkOrderDto workOrderDto) {
        WorkOrder workOrder = workOrderRepository.findById(workOrderDto.getId()).orElseThrow(() -> new UserException("WorkOrder#" + workOrderDto.getId() + " not found"));

        workOrderMapper.partialUpdate(workOrder, workOrderDto);
        workOrderRepository.save(workOrder);
        return workOrderMapper.toDto(workOrder);
    }

    public void deleteWorkOrder(Long id) {
        WorkOrder workOrder = workOrderRepository.findById(id).orElseThrow(() -> new UserException("WorkOrder#" + id + " not found"));
        workOrderRepository.delete(workOrder);
    }

    public PaginatedResponseDto<WorkOrderDto> search(WorkOrderSearchDto searchDto) {

        Page<WorkOrder> workOrdersPage = workOrderRepository.findAll(searchDto.getSpecification(), searchDto.getPageable());
        List<WorkOrderDto> workOrderDtos = workOrderMapper.toDtos(workOrdersPage.getContent());

        return PaginatedResponseDto.<WorkOrderDto>builder()
                .page(searchDto.getPage())
                .size(workOrderDtos.size())
                .sortingFields(searchDto.getSort())
                .sortDirection(searchDto.getDir().name())
                .data(workOrderDtos)
                .build();
    }
}


