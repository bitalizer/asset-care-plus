package com.knits.assetcare.repository.security;

import com.knits.assetcare.model.security.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {

    Optional<Role> findOneByName(String name);

    Boolean existsRoleByName(String name);
}

