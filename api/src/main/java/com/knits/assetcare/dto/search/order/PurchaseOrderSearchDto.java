package com.knits.assetcare.dto.search.order;

import com.knits.assetcare.dto.search.common.AbstractAuditableSearchDto;
import com.knits.assetcare.model.order.OrderItem;
import com.knits.assetcare.model.order.PurchaseOrder;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.criteria.*;
import java.math.BigDecimal;
import java.util.List;
import java.util.Objects;

import static com.knits.assetcare.utils.FilterUtils.addEqualPredicateIfNotNull;
import static com.knits.assetcare.utils.FilterUtils.addLikePredicateIfNotEmpty;

@Data
@EqualsAndHashCode(callSuper = true)
@SuperBuilder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
public class PurchaseOrderSearchDto extends AbstractAuditableSearchDto<PurchaseOrder> {

    private String status;
    private String categoryName;
    private String customerName;
    private String vendorName;
    private Long customerId;
    private Long vendorId;

    private BigDecimal totalCostFrom;
    private BigDecimal totalCostTo;

    private Long totalQuantityFrom;
    private Long totalQuantityTo;

    @Override
    protected void auditableWithFilters(Root<PurchaseOrder> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder, List<Predicate> filters) {
        addLikePredicateIfNotEmpty(root, criteriaBuilder, status, "status", filters);
        addLikePredicateIfNotEmpty(root, criteriaBuilder, categoryName, "category.name", filters);
        addLikePredicateIfNotEmpty(root, criteriaBuilder, customerName, "customer.name", filters);
        addLikePredicateIfNotEmpty(root, criteriaBuilder, vendorName, "vendor.name", filters);
        addEqualPredicateIfNotNull(root, criteriaBuilder, customerId, "customer.id", filters);
        addEqualPredicateIfNotNull(root, criteriaBuilder, vendorId, "vendor.id", filters);

        // Join to orderItems
        Join<PurchaseOrder, OrderItem> orderItemsJoin = root.joinList("orderItems", JoinType.LEFT);

        // Calculate sum of quantity
        Expression<Long> totalQuantityExpression = criteriaBuilder.sum(orderItemsJoin.get("quantity").as(Long.class));
        applyRangeFilter(criteriaBuilder, query, totalQuantityFrom, totalQuantityTo, totalQuantityExpression);

        // Calculate sum of totalCost
        Expression<BigDecimal> totalCostExpression = criteriaBuilder.sum(
                criteriaBuilder.prod(
                        orderItemsJoin.get("price").as(BigDecimal.class),
                        orderItemsJoin.get("quantity").as(BigDecimal.class)
                )
        );
        applyRangeFilter(criteriaBuilder, query, totalCostFrom, totalCostTo, totalCostExpression);

        query.groupBy(root);
    }

    private <T extends Comparable<? super T>> void applyRangeFilter(CriteriaBuilder criteriaBuilder, CriteriaQuery<?> query, T from, T to, Expression<T> expression) {
        Predicate predicate = criteriaBuilder.conjunction();

        if (Objects.nonNull(from)) {
            predicate = criteriaBuilder.and(
                    predicate,
                    criteriaBuilder.greaterThanOrEqualTo(expression, from)
            );
        }

        if (Objects.nonNull(to)) {
            predicate = criteriaBuilder.and(
                    predicate,
                    criteriaBuilder.lessThanOrEqualTo(expression, to)
            );
        }

        if (Objects.nonNull(from) || Objects.nonNull(to)) {
            query.having(predicate);
        }
    }

}
