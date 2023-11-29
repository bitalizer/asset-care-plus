package com.knits.assetcare.model.common;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;

@Entity
@Table(name = "billing_detail")
@Data
@NoArgsConstructor
@SuperBuilder(toBuilder = true)
public class BillingDetails extends AbstractActiveEntity {

    @Column(name = "ship_to_name")
    private String shipToName;

    @Column(name = "company_name", nullable = false, length = 50)
    private String companyName;

    @Column(name = "phone_number", nullable = false)
    private String phoneNumber;

    @Column(name = "fax")
    private String fax;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "address_id")
    private Address address;
}