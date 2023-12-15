package com.knits.assetcare.service.location;

import com.knits.assetcare.dto.data.common.AddressDto;
import com.knits.assetcare.dto.data.location.LocationDto;
import com.knits.assetcare.mapper.location.LocationMapper;
import com.knits.assetcare.mapper.location.LocationMapperImpl;
import com.knits.assetcare.mocks.dto.location.LocationDtoMock;
import com.knits.assetcare.mocks.dto.security.UserDtoMock;
import com.knits.assetcare.mocks.model.location.LocationMock;
import com.knits.assetcare.model.location.Location;
import com.knits.assetcare.repository.location.LocationRepository;
import com.knits.assetcare.service.security.UserService;
import com.knits.assetcare.utils.MapperHelper;
import lombok.SneakyThrows;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.*;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.junit.jupiter.MockitoSettings;
import org.mockito.quality.Strictness;

import java.util.Optional;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
@MockitoSettings(strictness = Strictness.LENIENT)
class LocationServiceTest {

    @Mock
    LocationRepository repository;

    @Mock
    UserService userService;

    @Spy
    private static LocationMapper locationMapper = new LocationMapperImpl();

    @Captor
    private ArgumentCaptor<Location> locationCaptor;

    @InjectMocks
    LocationService service;

    @BeforeAll
    @SneakyThrows
    public static void init() {
        MapperHelper.initializeMapper(locationMapper);
    }

    @Test
    @DisplayName("Save Location Success")
    void saveSuccess() {

        final Long mockId = 1L;
        final Long locationGeneratedId = 1L;
        LocationDto toSaveDto = LocationDtoMock.shallowLocationDto(null);
        toSaveDto.setAddress(AddressDto.builder().id(mockId).build());

        when(repository.save(Mockito.any(Location.class)))
                .thenAnswer(invocation -> {
                    Location location = invocation.getArgument(0);
                    location.setId(locationGeneratedId);
                    return location;
                });

        when(userService.getCurrentUserAsDto()).thenReturn(UserDtoMock.shallowUserDto(1L));

        LocationDto savedDto = service.create(toSaveDto);

        verify(repository).save(locationCaptor.capture());
        Location toSaveEntity = locationCaptor.getValue();

        verify(locationMapper, times(1)).toEntity(toSaveDto);
        verify(userService, times(1)).getCurrentUserAsEntity();
        verify(repository, times(1)).save(toSaveEntity);
        verify(locationMapper, times(1)).toDto(toSaveEntity);

        assertThat(toSaveDto.getName()).isEqualTo(savedDto.getName());

    }

    @Test
    @DisplayName("partial Update success")
    void partialUpdate() {

        Long entityIdToUpdate = 1L;
        String updateOnTitleofLocation = "updatedTitleofLocation";
        Location foundEntity = LocationMock.shallowLocation(entityIdToUpdate);
        LocationDto toUpdateDto = locationMapper.toDto(foundEntity);
        toUpdateDto.setName(updateOnTitleofLocation);

        when(repository.findById(entityIdToUpdate)).thenReturn(Optional.of(foundEntity));

        LocationDto updatedDto = service.partialUpdate(toUpdateDto);

        verify(repository).save(locationCaptor.capture());
        Location toUpdateEntity = locationCaptor.getValue();

        verify(locationMapper, times(1)).partialUpdate(toUpdateEntity, toUpdateDto);
        verify(repository, times(1)).save(foundEntity);
        verify(locationMapper, times(2)).toDto(foundEntity);

        assertThat(toUpdateDto).isEqualTo(updatedDto);

    }

    @Test
    @DisplayName("delete success")
    void deleteSuccess() {

        Long entityIdToDelete = 1L;
        Location foundEntity = LocationMock.shallowLocation(entityIdToDelete);
        LocationDto toDeleteDto = locationMapper.toDto(foundEntity);
        when(repository.findById(entityIdToDelete)).thenReturn(Optional.of(foundEntity));
        service.delete(entityIdToDelete);
        verify(repository, times(1)).deleteById(entityIdToDelete);

    }
}