package com.knits.assetcare.dto.search.business;

import com.knits.assetcare.model.business.Vendor;
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
public class VendorSearchDto extends AbstractBusinessEntitySearchDto<Vendor> {

    private Long organizationId;

    @Override
    protected void auditableWithFilters(Root<Vendor> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder, List<Predicate> filters) {
        super.auditableWithFilters(root, query, criteriaBuilder, filters);
        addEqualPredicateIfNotNull(root, criteriaBuilder, organizationId, "organization.id", filters);
    }

}
