package com.knits.assetcare.dto.search.business;

import com.knits.assetcare.model.business.Customer;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@EqualsAndHashCode(callSuper = true)
@SuperBuilder
@NoArgsConstructor
public class CustomerSearchDto extends AbstractBusinessEntitySearchDto<Customer> {

}
