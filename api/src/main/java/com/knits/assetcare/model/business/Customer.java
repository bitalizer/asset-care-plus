package com.knits.assetcare.model.business;

import com.knits.assetcare.model.common.BillingDetails;
import com.knits.assetcare.model.common.Contact;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;

@Entity
@Table(name = "customer")
@Data
@NoArgsConstructor
@SuperBuilder(toBuilder = true)
public class Customer extends AbstractBusinessEntity {

    @ManyToOne(optional = false)
    @JoinColumn(name = "contact_id")
    private Contact contact;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "billing_details_id", nullable = false)
    private BillingDetails billingDetails;

}