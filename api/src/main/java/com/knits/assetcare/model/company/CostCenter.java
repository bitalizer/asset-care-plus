package com.knits.assetcare.model.company;


import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@SuperBuilder(toBuilder=true)
@Table(name = "cost_center")
public class CostCenter extends AbstractOrganizationStructure implements Serializable{

    @OneToMany(mappedBy = "costCenter")
    private List<Employee> employees;
}
