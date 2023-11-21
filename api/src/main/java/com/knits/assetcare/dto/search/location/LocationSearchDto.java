package com.knits.assetcare.dto.search.location;

import com.knits.assetcare.dto.search.common.AbstractAuditableSearchDto;
import com.knits.assetcare.model.enums.LocationUsageType;
import com.knits.assetcare.model.enums.OwnershipType;
import com.knits.assetcare.model.location.Location;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import org.apache.logging.log4j.util.Strings;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.List;

@Data
@EqualsAndHashCode(callSuper = true)
@SuperBuilder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
public class LocationSearchDto extends AbstractAuditableSearchDto<Location> {

    private String name;
    private Long countryId;
    private String address;
    private String postalCode;
    private String ownership;


    @Override
    protected void auditableWithFilters(Root<Location> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder, List<Predicate> filters) {
        if (Strings.isNotBlank(name)) {
            Predicate titleAsPredicate = criteriaBuilder.equal(root.get("name"), name);
            filters.add(titleAsPredicate);
        }

        if (countryId != null) {
            Predicate countryIdAsPredicate = criteriaBuilder.equal(root.get("country").get("id"), countryId);
            filters.add(countryIdAsPredicate);
        }

        if (Strings.isNotBlank(address)) {
            Predicate addressAsPredicate = criteriaBuilder.equal(root.get("address"),  address );
            filters.add(addressAsPredicate);
        }

        if (Strings.isNotBlank(postalCode)) {
            Predicate postalCodeAsPredicate = criteriaBuilder.equal(root.get("postalCode"),  postalCode );
            filters.add(postalCodeAsPredicate);
        }

        if (Strings.isNotBlank(ownership)) {
            Predicate ownershipAsPredicate = criteriaBuilder.equal(root.get("ownership"), OwnershipType.valueOf(ownership));
            filters.add(ownershipAsPredicate);
        }

    }
}
