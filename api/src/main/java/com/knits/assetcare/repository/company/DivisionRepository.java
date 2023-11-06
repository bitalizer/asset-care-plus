package com.knits.assetcare.repository.company;

import com.knits.assetcare.model.company.Division;
import com.knits.assetcare.repository.common.ActiveEntityRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface DivisionRepository extends ActiveEntityRepository<Division> {

    @Query("SELECT d from Division d WHERE d.name=:name AND d.active = true")
    Optional<Division> findOneByName(@Param("name") String name);
}

