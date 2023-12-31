package com.knits.assetcare.repository.company;

import com.knits.assetcare.model.company.BusinessUnit;
import com.knits.assetcare.repository.common.ActiveEntityRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BusinessUnitRepository extends ActiveEntityRepository<BusinessUnit> {

    @Query("SELECT e from BusinessUnit e")
    List<BusinessUnit> findAllBusinessUnits();
    @Query("SELECT b from BusinessUnit b WHERE b.name=:name AND b.active = true")
    Optional<BusinessUnit> findOneByName(@Param("name") String name);
}
