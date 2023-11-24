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

    private BigDecimal totalCost;
    private Long totalQuantity;

    @Override
    protected void auditableWithFilters(Root<PurchaseOrder> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder, List<Predicate> filters) {
        addLikePredicateIfNotEmpty(root, criteriaBuilder, status, "status", filters);
        addLikePredicateIfNotEmpty(root, criteriaBuilder, categoryName, "category.name", filters);
        addLikePredicateIfNotEmpty(root, criteriaBuilder, customerName, "customer.name", filters);
        addLikePredicateIfNotEmpty(root, criteriaBuilder, vendorName, "vendor.name", filters);
        addEqualPredicateIfNotNull(root, criteriaBuilder, customerId, "customer.id", filters);
        addEqualPredicateIfNotNull(root, criteriaBuilder, vendorId, "vendor.id", filters);

        Join<PurchaseOrder, OrderItem> orderItemsJoin = root.join("orderItems");

        if (Objects.nonNull(totalCost)) {
            Expression<BigDecimal> totalCostExpression = criteriaBuilder.sum(
                    criteriaBuilder.prod(
                            criteriaBuilder.toBigDecimal(orderItemsJoin.get("price")),
                            criteriaBuilder.toBigDecimal(orderItemsJoin.get("quantity"))
                    )
            );
            filters.add(criteriaBuilder.equal(totalCostExpression, totalCost));
        }

        if (Objects.nonNull(totalQuantity)) {
            Expression<Long> totalQuantityExpression = criteriaBuilder.sum(
                    root.join("orderItems").get("quantity").as(Long.class)
            );
            filters.add(criteriaBuilder.equal(totalQuantityExpression, totalQuantity));
        }
    }
}
