package com.knits.assetcare.dto.validation;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.util.Arrays;
import java.util.Set;
import java.util.stream.Collectors;

public class EnumValidatorConstraint implements ConstraintValidator<EnumValidator, String> {

    private Set<String> values;

    @Override
    public void initialize(EnumValidator constraintAnnotation) {
        if (constraintAnnotation.enumClass() == null) {
            throw new IllegalArgumentException("The enum class must be specified in EnumValidator annotation.");
        }

        Enum<?>[] enumConstants = constraintAnnotation.enumClass().getEnumConstants();
        values = Arrays.stream(enumConstants).map(Enum::name).collect(Collectors.toSet());
    }

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        return values.contains(value);
    }

}