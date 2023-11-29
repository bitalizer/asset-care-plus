package com.knits.assetcare.dto.search.business;

import com.knits.assetcare.dto.search.common.AbstractAuditableSearchDto;
import com.knits.assetcare.model.business.AbstractBusinessEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.math.BigDecimal;
import java.util.List;

import static com.knits.assetcare.utils.FilterUtils.*;


@Data
@EqualsAndHashCode(callSuper = true)
@SuperBuilder(toBuilder = true)
@NoArgsConstructor
public abstract class AbstractBusinessEntitySearchDto<T extends AbstractBusinessEntity> extends AbstractAuditableSearchDto<T> {

    private String name;

    private String type;

    private Integer hourlyRateFrom;

    private Integer hourlyRateTo;

    private String currency;

    @Override
    protected void auditableWithFilters(Root<T> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder, List<Predicate> filters) {
        addLikePredicateIfNotEmpty(root, criteriaBuilder, name, "name", filters);
        addLikePredicateIfNotEmpty(root, criteriaBuilder, type, "type", filters);
        addRangeFromFilter(root, criteriaBuilder, hourlyRateFrom, "hourlyRate", filters);
        addRangeToFilter(root, criteriaBuilder, hourlyRateTo, "hourlyRate", filters);
        addLikePredicateIfNotEmpty(root, criteriaBuilder, currency, "currency", filters);
    }

}
