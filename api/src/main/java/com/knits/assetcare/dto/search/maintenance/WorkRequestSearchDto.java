package com.knits.assetcare.dto.search.maintenance;

import com.knits.assetcare.dto.search.common.AbstractAuditableSearchDto;
import com.knits.assetcare.model.maintenance.WorkRequest;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.List;

import static com.knits.assetcare.utils.FilterUtils.addLikePredicateIfNotEmpty;

@Data
@EqualsAndHashCode(callSuper = true)
@SuperBuilder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
public class WorkRequestSearchDto extends AbstractAuditableSearchDto<WorkRequest> {

    private String name;
    private String priority;

    @Override
    protected void auditableWithFilters(Root<WorkRequest> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder, List<Predicate> filters) {
        addLikePredicateIfNotEmpty(root, criteriaBuilder, name, "name", filters);
        addLikePredicateIfNotEmpty(root, criteriaBuilder, priority, "priority", filters);
    }

}
