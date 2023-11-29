package com.knits.assetcare.model.inventory;

import com.knits.assetcare.model.common.Category;
import com.knits.assetcare.model.enums.AssetStatus;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "asset")
@Data
@NoArgsConstructor
@SuperBuilder(toBuilder = true)
public class Asset extends AbstractInventoryItem {

    @Column(name = "use_asset_care")
    private Boolean useAssetCare;

    @Column(name = "notes")
    private String notes;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private AssetStatus status;

    @Column(name = "purchase_date")
    private LocalDate purchaseDate;

    @Column(name = "placed_in_service_date")
    private LocalDate placedInServiceDate;

    @Column(name = "warranty_expiration_date")
    private LocalDate warrantyExpirationDate;

    @Column(name = "life_time_days")
    private Integer lifeTimeDays;

    @ManyToOne(optional = false)
    @JoinColumn(name = "category_id")
    private Category category;

    @OneToMany(mappedBy = "asset", fetch = FetchType.LAZY)
    private List<Part> parts = new ArrayList<>();

    @ElementCollection(fetch = FetchType.LAZY)
    @CollectionTable(name = "asset_images", joinColumns = @JoinColumn(name = "asset_id"))
    @Column(name = "image_url")
    private List<String> images = new ArrayList<>();

    @ElementCollection
    @CollectionTable(
            name = "asset_attachments",
            joinColumns = @JoinColumn(name = "asset_id"),
            foreignKey = @ForeignKey(name = "fk_asset_attachments_files"))
    @Column(name = "binary_data_id")
    private List<Long> files = new ArrayList<>();
}