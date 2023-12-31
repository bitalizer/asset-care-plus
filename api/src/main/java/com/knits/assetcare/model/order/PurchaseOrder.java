package com.knits.assetcare.model.order;

import com.knits.assetcare.model.business.Customer;
import com.knits.assetcare.model.business.Vendor;
import com.knits.assetcare.model.common.AbstractAuditableEntity;
import com.knits.assetcare.model.common.Category;
import com.knits.assetcare.model.enums.OrderStatus;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "purchase_order")
@Data
@NoArgsConstructor
@SuperBuilder(toBuilder = true)
public class PurchaseOrder extends AbstractAuditableEntity {

    private String notes;

    @Enumerated(EnumType.STRING)
    private OrderStatus status;

    @ManyToOne(optional = false)
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToOne(optional = false)
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @ManyToOne(optional = false)
    @JoinColumn(name = "vendor_id")
    private Vendor vendor;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<OrderItem> orderItems;

}