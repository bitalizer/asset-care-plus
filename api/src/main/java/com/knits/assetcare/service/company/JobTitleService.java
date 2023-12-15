package com.knits.assetcare.service.company;

import com.knits.assetcare.dto.api.PaginatedResponseDto;
import com.knits.assetcare.dto.data.company.JobTitleDto;
import com.knits.assetcare.dto.search.company.JobTitleSearchDto;
import com.knits.assetcare.exceptions.UserException;
import com.knits.assetcare.mapper.company.JobTitleMapper;
import com.knits.assetcare.model.company.JobTitle;
import com.knits.assetcare.repository.company.JobTitleRepository;
import com.knits.assetcare.service.common.GenericService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class JobTitleService extends GenericService {

    private final JobTitleRepository repository;

    private final JobTitleMapper mapper;

    public JobTitleDto create(JobTitleDto jobTitleDto) {
        logCurrentUser("Request to save JobTitle : %s".formatted(jobTitleDto.toString()));
        String name =jobTitleDto.getName();
        if (repository.findOneByName(name).isPresent()){
            throw new UserException("JobTitle with name %s already exists".formatted(name));
        }

        log.debug("Request to save JobTitle : {}", jobTitleDto);

        JobTitle jobTitle = mapper.toEntity(jobTitleDto);
        jobTitle.setCreatedBy(getCurrentUserAsEntity());
        jobTitle.setStartDate(LocalDateTime.now());
        jobTitle.setActive(true);
        return mapper.toDto(repository.save(jobTitle));
    }

    public void delete(Long id) {
        logCurrentUser("Request to delete JobTitle# : %s".formatted(id));

        repository.deleteById(id);
    }

    @Transactional
    public JobTitleDto partialUpdate(JobTitleDto jobTitleDto) {
        logCurrentUser("Request to partialUpdate JobTitle : %s".formatted(jobTitleDto.toString()));

        JobTitle jobTitle = repository.findById(jobTitleDto.getId()).orElseThrow(()
                -> new UserException("JobTitle#" + jobTitleDto.getId() + " not found"));

        mapper.partialUpdate(jobTitle, jobTitleDto);
        return mapper.toDto(repository.save(jobTitle));
    }

    @Transactional
    public JobTitleDto update(JobTitleDto jobTitleDto) {
        logCurrentUser("Request to update JobTitle : %s".formatted(jobTitleDto.toString()));

        JobTitle jobTitle = repository.findById(jobTitleDto.getId()).orElseThrow(
                () -> new UserException("JobTitle#" + jobTitleDto.getId() + " not found")
        );
        mapper.update(jobTitle, jobTitleDto);
        return mapper.toDto(repository.save(jobTitle));
    }

    public PaginatedResponseDto<JobTitleDto> search(JobTitleSearchDto jobTitleSearchDto) {
        Page<JobTitle> jobTitlePage = repository.findAll(jobTitleSearchDto.getSpecification(), jobTitleSearchDto.getPageable());
        List<JobTitleDto> jobTitleDtos = mapper.toDtos(jobTitlePage.getContent());
        return PaginatedResponseDto.<JobTitleDto>builder()
                .page(jobTitleSearchDto.getPage())
                .size(jobTitleDtos.size())
                .totalElements(jobTitlePage.getTotalElements())
                .totalPages(jobTitlePage.getTotalPages())
                .sortingFields(jobTitleSearchDto.getSort())
                .sortDirection(jobTitleSearchDto.getDir().name())
                .data(jobTitleDtos)
                .build();
    }
}
