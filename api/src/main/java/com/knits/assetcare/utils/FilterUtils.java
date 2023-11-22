package com.knits.assetcare.utils;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import org.apache.commons.lang3.StringUtils;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Path;
import javax.persistence.criteria.Predicate;
import java.time.LocalDate;
import java.util.List;
import java.util.Objects;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public final class FilterUtils {

    public static void addLikePredicateIfNotEmpty(Path<?> root, CriteriaBuilder criteriaBuilder, String value, String attributeName, List<Predicate> filters) {
        if (StringUtils.isNotEmpty(value)) {
            Path<String> path = getPathFromAttributeName(root, attributeName);
            filters.add(criteriaBuilder.like(criteriaBuilder.lower(path), "%" + value.toLowerCase() + "%"));
        }
    }

    public static void addDateFromFilterIfNotNull(Path<?> root, CriteriaBuilder criteriaBuilder, LocalDate fromDate, String attributeName, List<Predicate> filters) {
        if (fromDate != null) {
            Path<LocalDate> path = getPathFromAttributeName(root, attributeName);
            filters.add(criteriaBuilder.greaterThanOrEqualTo(path, fromDate.atStartOfDay().toLocalDate()));
        }
    }

    public static void addDateToFilterIfNotNull(Path<?> root, CriteriaBuilder criteriaBuilder, LocalDate toDate, String attributeName, List<Predicate> filters) {
        if (toDate != null) {
            Path<LocalDate> path = getPathFromAttributeName(root, attributeName);
            filters.add(criteriaBuilder.lessThanOrEqualTo(path, toDate.atStartOfDay().toLocalDate()));
        }
    }

    public static <T> void addEqualPredicateIfNotNull(Path<?> root, CriteriaBuilder criteriaBuilder, T value, String attributeName, List<Predicate> filters) {
        if (Objects.nonNull(value)) {
            Path<T> path = getPathFromAttributeName(root, attributeName);
            filters.add(criteriaBuilder.equal(path, value));
        }
    }

    @SuppressWarnings("unchecked")
    public static <T> Path<T> getPathFromAttributeName(Path<?> root, String attributeName) {
        String[] attributeParts = attributeName.split("\\.");
        Path<T> path = (Path<T>) root;

        for (String part : attributeParts) {
            path = path.get(part);
        }

        return path;
    }

    public static <T extends Comparable<? super T>> void addRangeFromFilter(
            Path<?> root,
            CriteriaBuilder criteriaBuilder,
            T fromValue,
            String attributeName,
            List<Predicate> filters) {
        Path<T> path = getPathFromAttributeName(root, attributeName);
        if (fromValue != null) {
            filters.add(criteriaBuilder.greaterThanOrEqualTo(path, fromValue));
        }
    }

    public static <T extends Comparable<? super T>> void addRangeToFilter(
            Path<?> root,
            CriteriaBuilder criteriaBuilder,
            T toValue,
            String attributeName,
            List<Predicate> filters) {
        Path<T> path = getPathFromAttributeName(root, attributeName);
        if (toValue != null) {
            filters.add(criteriaBuilder.lessThanOrEqualTo(path, toValue));
        }
    }
}