package com.knits.assetcare.model.inventory;


import com.knits.assetcare.model.business.Vendor;
import com.knits.assetcare.model.common.AbstractAuditableEntity;
import com.knits.assetcare.model.location.Location;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MappedSuperclass;
import java.math.BigDecimal;

@MappedSuperclass
@NoArgsConstructor
@Data
@SuperBuilder(toBuilder = true)
public abstract class AbstractInventoryItem extends AbstractAuditableEntity {

    @Column(name = "name", length = 50, nullable = false)
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "quantity", nullable = false)
    private Integer quantity;

    @Column(name = "price", nullable = false)
    private BigDecimal price;

    @Column(name = "bar_code")
    private String barCode;

    @ManyToOne(optional = false)
    @JoinColumn(name = "vendor_id")
    private Vendor vendor;

    @ManyToOne(optional = false)
    @JoinColumn(name = "location_id")
    private Location location;
}
