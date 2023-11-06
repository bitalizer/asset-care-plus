package com.knits.assetcare.service.company;

import com.knits.assetcare.dto.api.PaginatedResponseDto;
import com.knits.assetcare.dto.data.company.TeamDto;
import com.knits.assetcare.dto.search.company.TeamSearchDto;
import com.knits.assetcare.exceptions.UserException;
import com.knits.assetcare.mapper.company.TeamMapper;
import com.knits.assetcare.model.company.Team;
import com.knits.assetcare.repository.company.TeamRepository;
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
public class TeamService extends GenericService {

    private final TeamRepository repository;
    private final TeamMapper mapper;

    public TeamDto create(TeamDto teamDto) {
        String operationLog = "Request to save Team : %s".formatted(teamDto.toString());
        logCurrentUser(operationLog);

        String teamName = teamDto.getName();
        if (repository.findOneByName(teamName).isPresent()) {
            throw new UserException("Team with name %s already exists".formatted(teamName));
        }

        Team team = mapper.toEntity(teamDto);
        team.setCreatedBy(getCurrentUserAsEntity());
        team.setStartDate(LocalDateTime.now());
        team.setActive(true);

        return mapper.toDto(repository.save(team));
    }

    @Transactional
    public TeamDto update(TeamDto teamDto) {
        log.debug("Request to update Team : {}", teamDto);

        Team team = repository.findById(teamDto.getId()).orElseThrow(() ->
                new UserException("Team#" + teamDto.getId() + " not found"));
        mapper.update(team, teamDto);
        return mapper.toDto(repository.save(team));
    }

    @Transactional
    public TeamDto partialUpdate(TeamDto teamDto) {
        log.debug("Request to update Team : {}", teamDto);
        Team team = repository.findById(teamDto.getId()).orElseThrow(() ->
                new UserException("Team#" + teamDto.getId() + " not found"));

        mapper.partialUpdate(team, teamDto);
        return mapper.toDto( repository.save(team));
    }

    public void delete(Long id) {
        log.debug("Delete Team by id : {}", id);
        repository.deleteById(id);
    }
    public PaginatedResponseDto<TeamDto> search(TeamSearchDto searchDto) {
        Page<Team> teamPage = repository.findAll(searchDto.getSpecification(), searchDto.getPageable());
        List<TeamDto> teamDtos = mapper.toDtos(teamPage.getContent());
        return PaginatedResponseDto.<TeamDto>builder()
                .page(searchDto.getPage())
                .size(teamDtos.size())
                .sortingFields(searchDto.getSort())
                .sortDirection(searchDto.getDir().name())
                .data(teamDtos)
                .build();
    }


    public TeamDto findById(Long id) {
        return mapper.toDto(repository.findById(id).orElseThrow(() ->
                new UserException("Team#" + id + " not found")));
    }
}
