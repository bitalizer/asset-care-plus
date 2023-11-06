package com.knits.assetcare.service.company;

import com.knits.assetcare.dto.data.company.AbstractOrganizationStructureDto;
import com.knits.assetcare.dto.data.company.TeamDto;
import com.knits.assetcare.mapper.company.AbstractOrganizationStructureEntityMapper;
import com.knits.assetcare.mapper.company.TeamMapper;
import com.knits.assetcare.mapper.company.TeamMapperImpl;
import com.knits.assetcare.mocks.dto.company.TeamDtoMock;
import com.knits.assetcare.mocks.model.company.TeamMock;
import com.knits.assetcare.model.company.AbstractOrganizationStructure;
import com.knits.assetcare.model.company.Team;
import com.knits.assetcare.repository.company.TeamRepository;
import com.knits.assetcare.service.security.UserService;
import com.knits.assetcare.utils.TestConsts;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.*;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.jpa.repository.JpaRepository;

@ExtendWith(MockitoExtension.class)
class TeamServiceTest extends AbstractOrganizationStructureServiceTest {

    @Mock
    private TeamRepository repository;

    @Mock
    private UserService userService;

    @Spy
    private TeamMapper mapper = new TeamMapperImpl();

    @InjectMocks
    private TeamService teamService;

    @Captor
    private ArgumentCaptor<Team> captor;

    @Test
    @DisplayName("Team save Success")
    void saveSuccess() {
        saveSuccessTemplate(TeamDtoMock.shallowTeamDto(TestConsts.NO_COUNTER));
    }

    @Test
    @DisplayName("Team partial Update success")
    void partialUpdate() {
        partialUpdateSuccessTemplate(TeamMock.shallowTeam(1L));
    }

    @Test
    @DisplayName("Team Update success")
    void testUpdate() {
        updateSuccessTemplate(TeamMock.shallowTeam(1L));
    }

    @Test
    @DisplayName("Team delete success")
    void deleteSuccess() {
        deleteSuccessTemplate(TeamMock.shallowTeam(1L));
    }

    @Override
    protected <E extends AbstractOrganizationStructure, D extends AbstractOrganizationStructureDto> AbstractOrganizationStructureEntityMapper<E, D> getMapper() {
        return (AbstractOrganizationStructureEntityMapper<E, D>) mapper;
    }

    @Override
    protected JpaRepository getRepository() {
        return (JpaRepository) repository;
    }

    @Override
    protected UserService getUserService() {
        return userService;
    }

    @Override
    protected <T> Class<T> getEntityClass() {
        return (Class<T>) Team.class;
    }

    @Override
    protected <E> ArgumentCaptor<E> getEntityCaptor() {
        return (ArgumentCaptor<E>) captor;
    }

    @Override
    protected AbstractOrganizationStructureDto saveInternal(AbstractOrganizationStructureDto toSaveDto) {
        return teamService.create((TeamDto) toSaveDto);
    }

    @Override
    protected <D extends AbstractOrganizationStructureDto> D partialUpdateInternal(D toSaveDto) {
        return (D) teamService.partialUpdate((TeamDto) toSaveDto);
    }

    @Override
    protected <D extends AbstractOrganizationStructureDto> D updateInternal(D toSaveDto) {
        return (D) teamService.update((TeamDto) toSaveDto);
    }

    @Override
    protected void deleteInternal(Long id) {
        teamService.delete(id);
    }
}
