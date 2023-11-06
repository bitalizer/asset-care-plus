package com.knits.assetcare.service.setup;

import com.knits.assetcare.model.common.Address;
import com.knits.assetcare.model.location.Location;
import com.knits.assetcare.model.security.User;
import com.knits.assetcare.repository.common.AddressRepository;
import com.knits.assetcare.repository.location.LocationRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
@Slf4j
public class LocationDataInitializer {

    private final AddressRepository addressRepository;

    private final LocationRepository locationRepository;

    public void setup(User adminUser) {
        setupLocations(adminUser);
    }

    private void setupLocations(User adminUser) {
        List<Address> addresses = addressRepository.findAllActive();
        List<Location> locations = locationRepository.findAllActive();

        int counter = 0;

        for (Location location : locations) {
            if (counter == addresses.size()) {
                counter = 0;
            }
            location.setAddress(addresses.get(counter));
            location.setCreatedBy(adminUser);
            location.setActive(true);
            locationRepository.save(location);
            counter++;
        }
        log.info("setupLocations Completed.");
    }
}
