package com.knits.assetcare.repository.location;

import com.knits.assetcare.model.location.Location;
import com.knits.assetcare.repository.common.ActiveEntityRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LocationRepository extends ActiveEntityRepository<Location> {

    Optional<Location> findOneByName(String locationName);

}
