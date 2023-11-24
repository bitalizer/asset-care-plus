package com.knits.assetcare.model.order;

import com.knits.assetcare.model.common.AbstractEntity;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "order_item")
@Inheritance(strategy = InheritanceType.JOINED)
@Data
@NoArgsConstructor
@SuperBuilder(toBuilder = true)
public class OrderItem extends AbstractEntity {

    @Column(name = "quantity", nullable = false)
    private Integer quantity;

    @Column(name = "price", nullable = false)
    private BigDecimal price;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id")
    private PurchaseOrder order;
}