package com.knits.assetcare.dto.search.maintenance;

import com.knits.assetcare.dto.search.common.AbstractAuditableSearchDto;
import com.knits.assetcare.model.maintenance.WorkOrder;
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

import static com.knits.assetcare.utils.FilterUtils.addEqualPredicateIfNotNull;
import static com.knits.assetcare.utils.FilterUtils.addLikePredicateIfNotEmpty;

@Data
@EqualsAndHashCode(callSuper = true)
@SuperBuilder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
public class WorkOrderSearchDto extends AbstractAuditableSearchDto<WorkOrder> {

    private String name;
    private String priority;
    private String status;
    private Long categoryId;
    private Long assetId;

    @Override
    protected void auditableWithFilters(Root<WorkOrder> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder, List<Predicate> filters) {
        addLikePredicateIfNotEmpty(root, criteriaBuilder, priority, "priority", filters);
        addLikePredicateIfNotEmpty(root, criteriaBuilder, status, "status", filters);
        addEqualPredicateIfNotNull(root, criteriaBuilder, categoryId, "category.id", filters);
        addEqualPredicateIfNotNull(root, criteriaBuilder, assetId, "asset.id", filters);
    }

}
