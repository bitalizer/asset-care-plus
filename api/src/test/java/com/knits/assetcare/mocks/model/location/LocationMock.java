package com.knits.assetcare.mocks.model.location;

import com.knits.assetcare.model.location.Location;
import com.knits.assetcare.model.enums.OwnershipType;
import com.knits.assetcare.model.enums.LocationUsageType;

import java.util.ArrayList;
import java.util.List;

public class LocationMock {

    public static Location shallowLocation(Long id){

        return Location.builder()
                .id(id)
                .name("A mock Name")
                .mapCoordinates(false)
                .latitude("A mock Latitude")
                .longitude("A mock Longitude")
                .ownership(OwnershipType.OUR_PREMISES)
                .use(LocationUsageType.OFFICE)
                .active(false)
                .build();
    }

    public static List<Location> shallowListOfLocation(int howMany){
        List<Location> mockLocations = new ArrayList<>();
        for (int i=0;i<howMany; i++){
            mockLocations.add(shallowLocation(Long.valueOf(i)));
        }
        return mockLocations;
    }
}
