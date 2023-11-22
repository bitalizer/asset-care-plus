package com.knits.assetcare.model.business;

import com.knits.assetcare.model.common.Organization;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;

@Entity
@Table(name = "vendor")
@Data
@NoArgsConstructor
@SuperBuilder(toBuilder = true)
public class Vendor extends AbstractBusinessEntity {

    @ManyToOne
    @JoinColumn(name = "organization_id")
    private Organization organization;

}