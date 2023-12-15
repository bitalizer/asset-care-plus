package com.knits.assetcare.service.inventory;

import com.knits.assetcare.dto.api.PaginatedResponseDto;
import com.knits.assetcare.dto.data.business.VendorDto;
import com.knits.assetcare.dto.data.common.CategoryDto;
import com.knits.assetcare.dto.data.inventory.AssetDto;
import com.knits.assetcare.dto.data.inventory.PartDto;
import com.knits.assetcare.dto.data.location.LocationDto;
import com.knits.assetcare.dto.search.inventory.AssetSearchDto;
import com.knits.assetcare.exceptions.UserException;
import com.knits.assetcare.mapper.inventory.AssetMapper;
import com.knits.assetcare.mapper.inventory.AssetMapperImpl;
import com.knits.assetcare.mocks.dto.inventory.AssetDtoMock;
import com.knits.assetcare.mocks.model.inventory.AssetMock;
import com.knits.assetcare.model.inventory.Asset;
import com.knits.assetcare.repository.inventory.AssetRepository;
import com.knits.assetcare.utils.MapperHelper;
import lombok.SneakyThrows;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.*;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class AssetServiceTest {

    @Mock
    private AssetRepository assetRepository;

    @Spy
    private static AssetMapper assetMapper = new AssetMapperImpl();

    @Captor
    private ArgumentCaptor<Asset> assetArgumentCaptor;

    @InjectMocks
    private AssetService assetService;


    @BeforeAll
    @SneakyThrows
    public static void init() {
        MapperHelper.initializeMapper(assetMapper);
    }

    @Test
    @DisplayName("Save new Asset Success")
    void saveNewAsset() {

        final Long mockId = 1L;
        final Long assetGeneratedId = 1L;

        AssetDto toSaveDto = AssetDtoMock.shallowAssetDto(null);
        toSaveDto.setCategory(CategoryDto.builder().id(mockId).build());
        toSaveDto.setVendor(VendorDto.builder().id(mockId).build());
        toSaveDto.setLocation(LocationDto.builder().id(mockId).build());
        toSaveDto.setParts(List.of(PartDto.builder().id(mockId).build()));

        when(assetRepository.save(Mockito.any(Asset.class)))
                .thenAnswer(invocation -> {
                    Asset asset = invocation.getArgument(0);
                    asset.setId(assetGeneratedId);
                    return asset;
                });

        AssetDto savedDto = assetService.saveNewAsset(toSaveDto);

        verify(assetRepository).save(assetArgumentCaptor.capture());
        Asset toSaveEntity = assetArgumentCaptor.getValue();

        verify(assetMapper, times(1)).toEntity(toSaveDto);
        verify(assetMapper, times(1)).toDtoFullDetails(toSaveEntity);
        verify(assetRepository, times(1)).save(toSaveEntity);

        assertThat(toSaveDto).isEqualTo(savedDto);
    }

    @Test
    @DisplayName("findById Asset Success")
    void findAssetById() {

        Asset toFind = AssetMock.shallowAsset(1L);

        when(assetRepository.findById(toFind.getId())).thenReturn(Optional.of(toFind));

        AssetDto foundDto = assetService.findAssetById(toFind.getId());

        verify(assetRepository, times(1)).findById(toFind.getId());
        verify(assetMapper, times(1)).toDtoFullDetails(toFind);

        assertNotNull(foundDto);
    }

    @Test
    @DisplayName("find ById Asset Not Found")
    void findAssetByIdNotFound() {

        Long AssetId = 1L;

        when(assetRepository.findById(AssetId)).thenReturn(Optional.empty());

        assertThrows(UserException.class, () -> assetService.findAssetById(AssetId));

        verify(assetRepository, times(1)).findById(any());
        verifyNoInteractions(assetMapper);
    }


    @Test
    @DisplayName("partial update Asset Success")
    void partialUpdateAsset() {

        AssetDto toUpdateDto = AssetDtoMock.shallowAssetDto(1L);

        when(assetRepository.findById(toUpdateDto.getId())).thenReturn(Optional.of(new Asset()));
        when(assetRepository.save(Mockito.any(Asset.class)))
                .thenAnswer(invocation -> invocation.getArgument(0));

        AssetDto savedDto = assetService.partialUpdate(toUpdateDto);

        verify(assetRepository).save(assetArgumentCaptor.capture());
        Asset toUpdateEntity = assetArgumentCaptor.getValue();

        verify(assetRepository, times(1)).save(toUpdateEntity);
        verify(assetMapper, times(1)).toDtoFullDetails(toUpdateEntity);

        assertThat(toUpdateDto).isEqualTo(savedDto);
    }

    @Test
    @DisplayName("delete Asset Success")
    void deleteAssetById() {

        Asset toDelete = AssetMock.shallowAsset(1L);

        when(assetRepository.findById(toDelete.getId())).thenReturn(Optional.of(toDelete));

        assetService.deleteAsset(toDelete.getId());

        verify(assetRepository, times(1)).findById(toDelete.getId());
        verify(assetRepository, times(1)).delete(assetArgumentCaptor.capture());

        Asset toDeleteEntity = assetArgumentCaptor.getValue();

        assertThat(toDeleteEntity).isEqualTo(toDelete);
    }

    @Test
    @DisplayName("delete Asset Not Found")
    void deleteAssetByIdNotFound() {
        Long AssetId = 1L;

        when(assetRepository.findById(AssetId)).thenReturn(Optional.empty());

        assertThrows(UserException.class, () -> assetService.deleteAsset(AssetId));

        verify(assetRepository, times(1)).findById(AssetId);
        verify(assetRepository, never()).delete(any());
        verifyNoInteractions(assetMapper);
    }

    @Test
    @DisplayName("search for Assets Success")
    void searchSuccess() {
        List<Asset> assets = AssetMock.shallowListOfAssets(25);

        AssetSearchDto searchDto = spy(AssetSearchDto.builder()
                .page(0)
                .limit(10)
                .sort("id")
                .dir(Sort.Direction.ASC)
                .build());

        Specification<Asset> specification = searchDto.getSpecification();
        when(searchDto.getSpecification()).thenReturn(specification);

        Page<Asset> page = new PageImpl<>(assets.subList(0, searchDto.getLimit()), searchDto.getPageable(), assets.size());
        when(assetRepository.findAll(specification, searchDto.getPageable())).thenReturn(page);
        PaginatedResponseDto<AssetDto> response = assetService.search(searchDto);

        verify(assetRepository, times(1)).findAll(specification, searchDto.getPageable());
        verify(assetMapper, times(1)).toDtosDetails(assets.subList(0, searchDto.getLimit()));

        assertThat(response.getSize()).isLessThanOrEqualTo(searchDto.getLimit());
        assertThat(response.getPage()).isEqualTo(searchDto.getPage());
        assertThat(response.getTotalElements()).isEqualTo(assets.size());
    }

}