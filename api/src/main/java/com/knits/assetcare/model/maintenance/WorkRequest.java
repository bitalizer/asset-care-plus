package com.knits.assetcare.model.maintenance;

import com.knits.assetcare.model.common.AbstractAuditableEntity;
import com.knits.assetcare.model.enums.PriorityType;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "work_request")
@Data
@NoArgsConstructor
@SuperBuilder(toBuilder = true)
public class WorkRequest extends AbstractAuditableEntity {

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "priority", nullable = false)
    @Enumerated(EnumType.STRING)
    @Builder.Default
    private PriorityType priority = PriorityType.NONE;

    @ElementCollection(fetch = FetchType.LAZY)
    @CollectionTable(name = "work_request_image", joinColumns = @JoinColumn(name = "work_request_id"))
    @Column(name = "image_url")
    private List<String> images = new ArrayList<>();

    @ElementCollection(fetch = FetchType.LAZY)
    @CollectionTable(
            name = "work_request_attachment",
            joinColumns = @JoinColumn(name = "work_request_id"),
            foreignKey = @ForeignKey(name = "fk_work_request_attachment_files"))
    @Column(name = "binary_data_id")
    private List<Long> files = new ArrayList<>();


}