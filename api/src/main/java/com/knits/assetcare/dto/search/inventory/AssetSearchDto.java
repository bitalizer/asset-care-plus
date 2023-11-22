package com.knits.assetcare.dto.search.inventory;

import com.knits.assetcare.model.inventory.Asset;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.time.LocalDate;
import java.util.List;

import static com.knits.assetcare.utils.FilterUtils.*;

@Data
@EqualsAndHashCode(callSuper = true)
@SuperBuilder
@NoArgsConstructor
public class AssetSearchDto extends AbstractInventoryItemSearchDto<Asset> {


    private String status;
    private String categoryName;
    private Long vendorId;

    private LocalDate purchaseDateFrom;
    private LocalDate purchaseDateTo;
    private LocalDate placedInServiceDateFrom;
    private LocalDate placedInServiceDateTo;
    private LocalDate warrantyExpirationDateFrom;
    private LocalDate warrantyExpirationDateTo;

    @Override
    protected void auditableWithFilters(Root<Asset> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder, List<Predicate> filters) {
        super.auditableWithFilters(root, query, criteriaBuilder, filters);
        addLikePredicateIfNotEmpty(root, criteriaBuilder, status, "status", filters);
        addLikePredicateIfNotEmpty(root, criteriaBuilder, categoryName, "category.name", filters);
        addEqualPredicateIfNotNull(root, criteriaBuilder, vendorId, "vendor.id", filters);
        addDateFromFilterIfNotNull(root, criteriaBuilder, purchaseDateFrom, "purchaseDate", filters);
        addDateToFilterIfNotNull(root, criteriaBuilder, purchaseDateTo, "purchaseDate", filters);
        addDateFromFilterIfNotNull(root, criteriaBuilder, placedInServiceDateFrom, "placedInServiceDate", filters);
        addDateToFilterIfNotNull(root, criteriaBuilder, placedInServiceDateTo, "placedInServiceDate", filters);
        addDateFromFilterIfNotNull(root, criteriaBuilder, warrantyExpirationDateFrom, "warrantyExpirationDate", filters);
        addDateToFilterIfNotNull(root, criteriaBuilder, warrantyExpirationDateTo, "warrantyExpirationDate", filters);
    }

}
