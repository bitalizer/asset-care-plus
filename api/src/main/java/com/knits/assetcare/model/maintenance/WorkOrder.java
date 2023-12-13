package com.knits.assetcare.model.maintenance;

import com.knits.assetcare.model.common.AbstractAuditableEntity;
import com.knits.assetcare.model.common.Category;
import com.knits.assetcare.model.enums.PriorityType;
import com.knits.assetcare.model.enums.WorkOrderStatus;
import com.knits.assetcare.model.inventory.Asset;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;

@Entity
@Table(name = "work_order")
@Data
@NoArgsConstructor
@SuperBuilder(toBuilder = true)
public class WorkOrder extends AbstractAuditableEntity {

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "priority", nullable = false)
    @Enumerated(EnumType.STRING)
    @Builder.Default
    private PriorityType priority = PriorityType.NONE;

    @Column(name = "status", nullable = false)
    @Enumerated(EnumType.STRING)
    @Builder.Default
    private WorkOrderStatus status = WorkOrderStatus.OPEN;

    @ManyToOne(optional = false)
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToOne(optional = false)
    @JoinColumn(name = "asset_id")
    private Asset asset;

}