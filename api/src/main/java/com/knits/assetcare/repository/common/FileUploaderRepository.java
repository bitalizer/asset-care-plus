package com.knits.assetcare.repository.common;

import com.knits.assetcare.model.common.BinaryData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FileUploaderRepository extends JpaRepository<BinaryData, Long> {
}
