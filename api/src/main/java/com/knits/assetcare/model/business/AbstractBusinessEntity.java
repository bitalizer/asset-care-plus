package com.knits.assetcare.model.business;


import com.knits.assetcare.model.common.AbstractAuditableEntity;
import com.knits.assetcare.model.enums.CurrencyType;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
@NoArgsConstructor
@Data
@SuperBuilder(toBuilder = true)
public class AbstractBusinessEntity extends AbstractAuditableEntity {

    @Column(length = 50, nullable = false)
    private String name;

    @Column
    private String description;

    @Column
    private String type;

    @Column(name = "hourly_rate")
    private Integer hourlyRate;

    @Column(name = "currency", nullable = false)
    @Enumerated(EnumType.STRING)
    @Builder.Default
    private CurrencyType currency = CurrencyType.EURO;

}
