package com.knits.assetcare.model.inventory;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;

@Entity
@Table(name = "part")
@Data
@NoArgsConstructor
@SuperBuilder(toBuilder = true)
public class Part extends AbstractInventoryItem {

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "asset_id")
    private Asset asset;
}