package com.knits.assetcare.model.security;

import com.knits.assetcare.model.common.AbstractActiveEntity;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;
@NoArgsConstructor
@SuperBuilder(toBuilder=true)
@Entity
@Data
public class Role extends AbstractActiveEntity {

    private String name;

}
