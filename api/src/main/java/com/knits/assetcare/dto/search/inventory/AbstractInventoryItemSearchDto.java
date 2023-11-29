package com.knits.assetcare.dto.search.inventory;

import com.knits.assetcare.dto.search.common.AbstractAuditableSearchDto;
import com.knits.assetcare.model.inventory.AbstractInventoryItem;
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
public abstract class AbstractInventoryItemSearchDto<T extends AbstractInventoryItem> extends AbstractAuditableSearchDto<T> {

    private String name;

    private BigDecimal priceFrom;

    private BigDecimal priceTo;

    private Integer quantityFrom;

    private Integer quantityTo;

    private String barCode;

    private String locationName;

    @Override
    protected void auditableWithFilters(Root<T> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder, List<Predicate> filters) {
        addLikePredicateIfNotEmpty(root, criteriaBuilder, name, "name", filters);
        addRangeFromFilter(root, criteriaBuilder, priceFrom, "price", filters);
        addRangeToFilter(root, criteriaBuilder, priceTo, "price", filters);
        addRangeFromFilter(root, criteriaBuilder, quantityFrom, "quantity", filters);
        addRangeToFilter(root, criteriaBuilder, quantityTo, "quantity", filters);
        addLikePredicateIfNotEmpty(root, criteriaBuilder, barCode, "barCode", filters);
        addLikePredicateIfNotEmpty(root, criteriaBuilder, locationName, "location.name", filters);
    }

}
