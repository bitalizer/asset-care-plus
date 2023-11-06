package com.knits.assetcare.model.company;

import com.knits.assetcare.model.common.AbstractAuditableEntity;
import com.knits.assetcare.model.common.BinaryData;
import com.knits.assetcare.model.security.User;
import lombok.*;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@SuperBuilder(toBuilder=true)
@Table(name = "contract")
public class Contract extends AbstractAuditableEntity {

    @OneToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "binary_id")
    private BinaryData binaryData;

    @OneToOne(cascade = CascadeType.REFRESH)
    @JoinColumn (name = "creator_id")
    private User createdBy;

    @OneToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "employee_id")
    private  Employee employee;


}
