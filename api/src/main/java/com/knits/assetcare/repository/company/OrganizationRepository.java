package com.knits.assetcare.repository.company;

import com.knits.assetcare.model.common.Organization;
import com.knits.assetcare.repository.common.ActiveEntityRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface OrganizationRepository extends ActiveEntityRepository<Organization> {

    @Query("SELECT o from Organization o WHERE o.name=:name AND o.active = true")
    Optional<Organization> findOneByName(String name);
}
