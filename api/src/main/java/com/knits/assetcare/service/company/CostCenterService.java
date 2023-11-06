package com.knits.assetcare.service.company;

import com.knits.assetcare.dto.data.company.CostCenterDto;
import com.knits.assetcare.dto.search.company.CostCenterSearchDto;
import com.knits.assetcare.exceptions.UserException;
import com.knits.assetcare.mapper.company.CostCenterMapper;
import com.knits.assetcare.model.company.CostCenter;
import com.knits.assetcare.repository.company.CostCenterRepository;
import com.knits.assetcare.service.common.GenericService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class CostCenterService extends GenericService {

    private final CostCenterRepository repository;
    private final CostCenterMapper mapper;

    public CostCenterDto create(CostCenterDto costCenterDto) {
        String operationLog ="Request to save CostCenter : %s".formatted(costCenterDto.toString());
        logCurrentUser(operationLog);
        String costCenterName =costCenterDto.getName();
        if (repository.findOneByName(costCenterName).isPresent()){
            throw new UserException("CostCenter with name %s already exists".formatted(costCenterName));
        }
        CostCenter costCenter = mapper.toEntity(costCenterDto);
        costCenter.setCreatedBy(getCurrentUserAsEntity());
        costCenter.setStartDate(LocalDateTime.now());
        costCenter.setActive(true);
        return mapper.toDto(repository.save(costCenter));
    }

    @Transactional
    public CostCenterDto update(CostCenterDto costCenterDto) {
        log.debug("Request to update CostCenter : {}", costCenterDto);

        CostCenter costCenter = repository.findById(costCenterDto.getId()).orElseThrow(()
                -> new UserException("CostCenter#" + costCenterDto.getId() + " not found"));
        mapper.update(costCenter, costCenterDto);
        repository.save(costCenter);
        return mapper.toDto(costCenter);
    }

    @Transactional
    public CostCenterDto partialUpdate(CostCenterDto costCenterDto) {
        log.debug("Request to update CostCenter : {}", costCenterDto);

        CostCenter costCenter = repository.findById(costCenterDto.getId()).orElseThrow(()
                -> new UserException("CostCenter#" + costCenterDto.getId() + " not found"));

        mapper.partialUpdate(costCenter, costCenterDto);
        repository.save(costCenter);
        return mapper.toDto(costCenter);
    }

    public void delete(Long id) {
        log.debug("Delete CostCenter by id : {}", id);
        repository.deleteById(id);
    }

    public Page<CostCenterDto> getActive(CostCenterSearchDto costCenterSearchDto) {

        Page<CostCenter> costCenterPage = repository.findAll(costCenterSearchDto.getSpecification(), costCenterSearchDto.getPageable());
        List<CostCenterDto> costCenterDtos = mapper.toDtos(costCenterPage.getContent());
        return new PageImpl<>(costCenterDtos, costCenterSearchDto.getPageable(), costCenterPage.getTotalElements());
    }

    public Page<CostCenterDto> getAll(CostCenterSearchDto costCenterSearchDto) {

        Page<CostCenter> costCenterPage = repository.findAll(costCenterSearchDto.getSpecification(), costCenterSearchDto.getPageable());
        List<CostCenterDto> costCenterDtos = mapper.toDtos(costCenterPage.getContent());
        return new PageImpl<>(costCenterDtos, costCenterSearchDto.getPageable(), costCenterPage.getTotalElements());
    }
}