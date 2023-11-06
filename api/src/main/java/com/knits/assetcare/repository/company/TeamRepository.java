package com.knits.assetcare.repository.company;

import com.knits.assetcare.model.company.Team;
import com.knits.assetcare.repository.common.ActiveEntityRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface TeamRepository extends ActiveEntityRepository<Team> {
    @Query("SELECT t from Team t WHERE t.name=:name AND t.active = true")
    Optional<Team> findOneByName(String name);
    Boolean existsByName(String name);
}
