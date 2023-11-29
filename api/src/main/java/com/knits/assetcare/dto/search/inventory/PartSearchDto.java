package com.knits.assetcare.dto.search.inventory;

import com.knits.assetcare.model.inventory.Part;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.List;

import static com.knits.assetcare.utils.FilterUtils.addEqualPredicateIfNotNull;

@Data
@EqualsAndHashCode(callSuper = true)
@SuperBuilder
@NoArgsConstructor
public class PartSearchDto extends AbstractInventoryItemSearchDto<Part> {

    private Long vendorId;

    @Override
    protected void auditableWithFilters(Root<Part> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder, List<Predicate> filters) {
        super.auditableWithFilters(root, query, criteriaBuilder, filters);
        addEqualPredicateIfNotNull(root, criteriaBuilder, vendorId, "vendor.id", filters);
    }

}
