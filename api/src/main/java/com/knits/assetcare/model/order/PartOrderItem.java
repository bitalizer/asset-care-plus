package com.knits.assetcare.model.order;

import com.knits.assetcare.model.inventory.Part;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
@Data
@NoArgsConstructor
@SuperBuilder(toBuilder = true)
public class PartOrderItem extends OrderItem {

    @ManyToOne
    @JoinColumn(name = "part_id")
    private Part part;

}