package com.knits.assetcare.service.company;

import com.knits.assetcare.dto.data.company.AbstractOrganizationStructureDto;
import com.knits.assetcare.dto.data.company.JobTitleDto;
import com.knits.assetcare.mapper.company.AbstractOrganizationStructureEntityMapper;
import com.knits.assetcare.mapper.company.JobTitleMapper;
import com.knits.assetcare.mapper.company.JobTitleMapperImpl;
import com.knits.assetcare.mocks.dto.company.JobTitleDtoMock;
import com.knits.assetcare.mocks.model.company.JobTitleMock;
import com.knits.assetcare.model.company.AbstractOrganizationStructure;
import com.knits.assetcare.model.company.JobTitle;
import com.knits.assetcare.repository.company.JobTitleRepository;
import com.knits.assetcare.service.security.UserService;
import com.knits.assetcare.utils.TestConsts;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.*;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.jpa.repository.JpaRepository;

@ExtendWith(MockitoExtension.class)
class JobTitleServiceTest extends AbstractOrganizationStructureServiceTest {

    @Mock
    private JobTitleRepository repository;

    @Mock
    private UserService userService;

    @Spy
    private JobTitleMapper mapper = new JobTitleMapperImpl();

    @InjectMocks
    private JobTitleService jobTitleService;

    @Captor
    private ArgumentCaptor<JobTitle> captor;

    @Test
    @DisplayName("JobTitle save Success")
    void saveSuccess() {
        saveSuccessTemplate(JobTitleDtoMock.shallowJobTitleDto(TestConsts.NO_COUNTER));
    }

    @Test
    @DisplayName("JobTitle partial Update success")
    void partialUpdate() {
        partialUpdateSuccessTemplate(JobTitleMock.shallowJobTitle(1L));
    }

    @Test
    @DisplayName("JobTitle Update success")
    void testUpdate() {
        updateSuccessTemplate(JobTitleMock.shallowJobTitle(1L));
    }

    @Test
    @DisplayName("JobTitle delete success")
    void deleteSuccess() {
        deleteSuccessTemplate(JobTitleMock.shallowJobTitle(1L));
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
        return (Class<T>) JobTitle.class;
    }

    @Override
    protected <E> ArgumentCaptor<E> getEntityCaptor() {
        return (ArgumentCaptor<E>) captor;
    }

    @Override
    protected AbstractOrganizationStructureDto saveInternal(AbstractOrganizationStructureDto toSaveDto) {
        return jobTitleService.create((JobTitleDto) toSaveDto);
    }

    @Override
    protected <D extends AbstractOrganizationStructureDto> D partialUpdateInternal(D toSaveDto) {
        return (D) jobTitleService.partialUpdate((JobTitleDto) toSaveDto);
    }

    @Override
    protected <D extends AbstractOrganizationStructureDto> D updateInternal(D toSaveDto) {
        return (D) jobTitleService.update((JobTitleDto) toSaveDto);
    }

    @Override
    protected void deleteInternal(Long id) {
        jobTitleService.delete(id);
    }
}
