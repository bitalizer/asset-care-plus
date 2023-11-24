package com.knits.assetcare.service.order;


import com.knits.assetcare.dto.api.PaginatedResponseDto;
import com.knits.assetcare.dto.data.order.PurchaseOrderDto;
import com.knits.assetcare.dto.search.order.PurchaseOrderSearchDto;
import com.knits.assetcare.exceptions.UserException;
import com.knits.assetcare.mapper.order.PurchaseOrderMapper;
import com.knits.assetcare.model.order.PurchaseOrder;
import com.knits.assetcare.repository.order.PurchaseOrderRepository;
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
public class PurchaseOrderService {

    private final PurchaseOrderMapper purchaseOrderMapper;
    private final PurchaseOrderRepository purchaseOrderRepository;

    public PurchaseOrderDto saveNewPurchaseOrder(PurchaseOrderDto purchaseOrderDto) {
        PurchaseOrder purchaseOrder = purchaseOrderMapper.toEntity(purchaseOrderDto);
        PurchaseOrder savedPurchaseOrder = purchaseOrderRepository.save(purchaseOrder);
        return purchaseOrderMapper.toDto(savedPurchaseOrder);
    }

    public PurchaseOrderDto findPurchaseOrderById(Long id) {
        PurchaseOrder purchaseOrder = purchaseOrderRepository.findById(id).orElseThrow(() -> new UserException("PurchaseOrder#" + id + " not found"));
        return purchaseOrderMapper.toDtoDetails(purchaseOrder);
    }

    public PurchaseOrderDto partialUpdate(PurchaseOrderDto purchaseOrderDto) {
        PurchaseOrder purchaseOrder = purchaseOrderRepository.findById(purchaseOrderDto.getId()).orElseThrow(() -> new UserException("PurchaseOrder#" + purchaseOrderDto.getId() + " not found"));

        purchaseOrderMapper.partialUpdate(purchaseOrder, purchaseOrderDto);
        purchaseOrderRepository.save(purchaseOrder);
        return purchaseOrderMapper.toDto(purchaseOrder);
    }

    public void deletePurchaseOrder(Long id) {
        PurchaseOrder purchaseOrder = purchaseOrderRepository.findById(id).orElseThrow(() -> new UserException("PurchaseOrder#" + id + " not found"));
        purchaseOrderRepository.delete(purchaseOrder);
    }

    public PaginatedResponseDto<PurchaseOrderDto> search(PurchaseOrderSearchDto searchDto) {

        Page<PurchaseOrder> purchaseOrdersPage = purchaseOrderRepository.findAll(searchDto.getSpecification(), searchDto.getPageable());
        List<PurchaseOrderDto> purchaseOrderDtos = purchaseOrderMapper.toDtos(purchaseOrdersPage.getContent());

        return PaginatedResponseDto.<PurchaseOrderDto>builder()
                .page(searchDto.getPage())
                .size(purchaseOrderDtos.size())
                .sortingFields(searchDto.getSort())
                .sortDirection(searchDto.getDir().name())
                .data(purchaseOrderDtos)
                .build();
    }
}


