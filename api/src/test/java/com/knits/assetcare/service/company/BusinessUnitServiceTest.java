package com.knits.assetcare.service.company;


import com.knits.assetcare.dto.data.company.AbstractOrganizationStructureDto;
import com.knits.assetcare.dto.data.company.BusinessUnitDto;
import com.knits.assetcare.mapper.company.AbstractOrganizationStructureEntityMapper;
import com.knits.assetcare.mapper.company.BusinessUnitMapper;
import com.knits.assetcare.mapper.company.BusinessUnitMapperImpl;
import com.knits.assetcare.mocks.dto.company.BusinessUnitDtoMock;
import com.knits.assetcare.mocks.model.company.BusinessUnitMock;
import com.knits.assetcare.mocks.model.company.GroupMock;
import com.knits.assetcare.model.company.AbstractOrganizationStructure;
import com.knits.assetcare.model.company.BusinessUnit;
import com.knits.assetcare.repository.company.BusinessUnitRepository;
import com.knits.assetcare.service.security.UserService;
import com.knits.assetcare.utils.TestConsts;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.*;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.jpa.repository.JpaRepository;

@ExtendWith(MockitoExtension.class)
class BusinessUnitServiceTest extends AbstractOrganizationStructureServiceTest{

    @Mock
    private BusinessUnitRepository repository;

    @Mock
    private UserService userService;

    @Spy
    private BusinessUnitMapper mapper  = new BusinessUnitMapperImpl();
    @InjectMocks
    private BusinessUnitService businessUnitService;
    @Captor
    private ArgumentCaptor<BusinessUnit> captor;

    @Test
    @DisplayName("BusinessUnit save Success")
    void saveSuccess() {
        saveSuccessTemplate(BusinessUnitDtoMock.shallowBusinessUnitDto(TestConsts.NO_COUNTER));
    }

    @Test
    @DisplayName("BusinessUnit partial Update success")
    void partialUpdate() {
        partialUpdateSuccessTemplate(BusinessUnitMock.shallowBusinessUnit(1L));
    }

    @Test
    @DisplayName("BusinessUnit Update success")
    void testUpdate() {
        updateSuccessTemplate(BusinessUnitMock.shallowBusinessUnit(1L));
    }

    @Test
    @DisplayName("BusinessUnit delete success")
    void deleteSuccess() {
       deleteSuccessTemplate(GroupMock.shallowGroup(1L));
    }

    @Override
    protected <E extends AbstractOrganizationStructure, D extends AbstractOrganizationStructureDto> AbstractOrganizationStructureEntityMapper<E, D> getMapper() {
        return (AbstractOrganizationStructureEntityMapper<E, D>) mapper;
    }

    @Override
    protected JpaRepository getRepository() {
        return (JpaRepository)repository;
    }

    @Override
    protected UserService getUserService() {
        return userService;
    }

    @Override
    protected <T> Class<T> getEntityClass() {
        return (Class<T>)BusinessUnit.class;
    }

    @Override
    protected <E> ArgumentCaptor<E> getEntityCaptor() {
        return (ArgumentCaptor<E>)captor;
    }

    @Override
    protected AbstractOrganizationStructureDto saveInternal(AbstractOrganizationStructureDto toSaveDto) {
        return businessUnitService.create((BusinessUnitDto)toSaveDto);
    }

    @Override
    protected <D extends AbstractOrganizationStructureDto> D partialUpdateInternal(D toSaveDto) {
        return (D) businessUnitService.partialUpdate((BusinessUnitDto)toSaveDto);
    }

    @Override
    protected <D extends AbstractOrganizationStructureDto> D updateInternal(D toSaveDto) {
        return (D) businessUnitService.update((BusinessUnitDto)toSaveDto);
    }

    @Override
    protected void deleteInternal(Long id) {
        businessUnitService.delete(id);
    }
}
