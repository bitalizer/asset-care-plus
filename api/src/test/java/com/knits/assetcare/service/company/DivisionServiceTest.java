package com.knits.assetcare.service.company;

import com.knits.assetcare.dto.data.company.AbstractOrganizationStructureDto;
import com.knits.assetcare.dto.data.company.DivisionDto;
import com.knits.assetcare.mapper.company.AbstractOrganizationStructureEntityMapper;
import com.knits.assetcare.mapper.company.DivisionMapper;
import com.knits.assetcare.mapper.company.DivisionMapperImpl;
import com.knits.assetcare.mocks.dto.company.DivisionDtoMock;
import com.knits.assetcare.mocks.model.company.DivisionMock;
import com.knits.assetcare.model.company.AbstractOrganizationStructure;
import com.knits.assetcare.model.company.Division;
import com.knits.assetcare.repository.company.DivisionRepository;
import com.knits.assetcare.service.security.UserService;
import com.knits.assetcare.utils.TestConsts;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.*;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.jpa.repository.JpaRepository;

@ExtendWith(MockitoExtension.class)
class DivisionServiceTest extends AbstractOrganizationStructureServiceTest {

    @Mock
    private DivisionRepository repository;

    @Mock
    private UserService userService;

    @Spy
    private DivisionMapper mapper = new DivisionMapperImpl();

    @InjectMocks
    private DivisionService divisionService;

    @Captor
    private ArgumentCaptor<Division> captor;

    @Test
    @DisplayName("Division save Success")
    void saveSuccess() {
        saveSuccessTemplate(DivisionDtoMock.shallowDivisionDto(TestConsts.NO_COUNTER));
    }

    @Test
    @DisplayName("Division partial Update success")
    void partialUpdate() {
        partialUpdateSuccessTemplate(DivisionMock.shallowDivision(1L));
    }

    @Test
    @DisplayName("Division Update success")
    void testUpdate() {
        updateSuccessTemplate(DivisionMock.shallowDivision(1L));
    }

    @Test
    @DisplayName("Division delete success")
    void deleteSuccess() {
        deleteSuccessTemplate(DivisionMock.shallowDivision(1L));
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
        return (Class<T>) Division.class;
    }

    @Override
    protected <E> ArgumentCaptor<E> getEntityCaptor() {
        return (ArgumentCaptor<E>) captor;
    }

    @Override
    protected AbstractOrganizationStructureDto saveInternal(AbstractOrganizationStructureDto toSaveDto) {
        return divisionService.create((DivisionDto) toSaveDto);
    }

    @Override
    protected <D extends AbstractOrganizationStructureDto> D partialUpdateInternal(D toSaveDto) {
        return (D) divisionService.partialUpdate((DivisionDto) toSaveDto);
    }

    @Override
    protected <D extends AbstractOrganizationStructureDto> D updateInternal(D toSaveDto) {
        return (D) divisionService.update((DivisionDto) toSaveDto);
    }

    @Override
    protected void deleteInternal(Long id) {
        divisionService.delete(id);
    }
}
