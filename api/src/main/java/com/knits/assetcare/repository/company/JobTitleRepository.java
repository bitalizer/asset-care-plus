package com.knits.assetcare.repository.company;

import com.knits.assetcare.model.company.JobTitle;
import com.knits.assetcare.repository.common.ActiveEntityRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface JobTitleRepository extends ActiveEntityRepository<JobTitle> {

    @Query("SELECT j from JobTitle j WHERE j.name=:name AND j.active = true")
    Optional<JobTitle> findOneByName(String name);
}
