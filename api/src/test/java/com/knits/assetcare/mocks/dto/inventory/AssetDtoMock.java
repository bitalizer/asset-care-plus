package com.knits.assetcare.mocks.dto.inventory;


import com.knits.assetcare.dto.data.inventory.AssetDto;
import com.knits.assetcare.model.enums.AssetStatus;

import java.math.BigDecimal;
import java.time.LocalDate;

public class AssetDtoMock {

    private static final LocalDate PURCHASE_DATE = LocalDate.of(2019, 1, 1);
    private static final LocalDate PLACED_IN_SERVICE_DATE = LocalDate.of(2020, 1, 1);
    private static final LocalDate WARRANTY_EXPIRATION_DATE = LocalDate.of(2025, 11, 1);

    public static AssetDto shallowAssetDto(Long id) {
        return AssetDto.builder()
                .id(id)
                .name("Mock Asset" + id)
                .description("Mock description")
                .notes("Mock notes")
                .status(AssetStatus.AVAILABLE)
                .purchaseDate(PURCHASE_DATE)
                .placedInServiceDate(PLACED_IN_SERVICE_DATE)
                .warrantyExpirationDate(WARRANTY_EXPIRATION_DATE)
                .lifeTimeDays(365)
                .useAssetCare(true)
                .quantity(2)
                .price(new BigDecimal("123.45"))
                .barCode("123456789")
                .active(true)
                .build();
    }
}
