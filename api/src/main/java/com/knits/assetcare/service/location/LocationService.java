package com.knits.assetcare.service.location;

import com.knits.assetcare.dto.api.PaginatedResponseDto;
import com.knits.assetcare.dto.data.location.LocationDto;
import com.knits.assetcare.dto.search.location.LocationSearchDto;
import com.knits.assetcare.exceptions.UserException;
import com.knits.assetcare.mapper.location.LocationMapper;
import com.knits.assetcare.model.location.Location;
import com.knits.assetcare.repository.location.LocationRepository;
import com.knits.assetcare.service.common.GenericService;
import com.knits.assetcare.service.security.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Slf4j
@Service
@Transactional
public class LocationService extends GenericService {

    private final LocationRepository repository;

    private final LocationMapper locationMapper;

    public LocationService(UserService userService, LocationRepository repository, LocationMapper locationMapper) {
        super(userService);
        this.repository = repository;
        this.locationMapper = locationMapper;
    }

    public LocationDto create(LocationDto locationDto) {
        String operationLog = "Request to create Location : %s".formatted(locationDto.toString());
        logCurrentUser(operationLog);

        String locationName = locationDto.getName();
        if (repository.findOneByName(locationName).isPresent()) {
            throw new UserException("Location with name %s already exists".formatted(locationName));
        }

        Location location = locationMapper.toEntity(locationDto);
        location.setCreatedBy(getCurrentUserAsEntity());
        location.setStartDate(LocalDateTime.now());
        location.setActive(true);
        return locationMapper.toDto(repository.save(location));
    }

    public LocationDto update(LocationDto locationDto) {
        log.debug("Request to edit Location : {}", locationDto);
        final Location locationFromDb = repository.findById(locationDto.getId()).get();
        if (locationFromDb.getId() == null) {
            String message = "Location with id = " + locationDto.getId() + " does not exist.";
            log.warn(message);
            throw new UserException(message);
        }
        locationMapper.update(locationFromDb, locationDto);
        repository.save(locationFromDb);
        return locationMapper.toDto(locationFromDb);
    }

    public LocationDto partialUpdate(LocationDto locationDto) {
        log.debug("Request to partial update Location : {}", locationDto);
        Location location = repository.findById(locationDto.getId()).orElseThrow(() -> new UserException("Location#" + locationDto.getId() + " not found"));
        locationMapper.partialUpdate(location, locationDto);
        repository.save(location);
        return locationMapper.toDto(location);
    }

    public void delete(Long id) {
        log.debug("Set status deleted = true to Location Id: {}", id);
        repository.deleteById(id);
    }

    public PaginatedResponseDto<LocationDto> search(LocationSearchDto searchDto) {

        Page<Location> locationPage = repository.findAll(searchDto.getSpecification(), searchDto.getPageable());
        List<LocationDto> locationDtos = locationMapper.toDtos(locationPage.getContent());

        return PaginatedResponseDto.<LocationDto>builder()
                .page(searchDto.getPage())
                .size(locationDtos.size())
                .totalElements(locationPage.getTotalElements())
                .totalPages(locationPage.getTotalPages())
                .sortingFields(searchDto.getSort())
                .sortDirection(searchDto.getDir().name())
                .data(locationDtos)
                .build();
    }


}
