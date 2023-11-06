package com.knits.assetcare.model.company;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@SuperBuilder(toBuilder=true)
@Table(name = "department")
public class Department extends AbstractOrganizationStructure implements Serializable {

    @OneToMany(mappedBy = "department")
    private List<Employee> employees;
}
