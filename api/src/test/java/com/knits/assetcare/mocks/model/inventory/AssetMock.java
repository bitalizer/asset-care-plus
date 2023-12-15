package com.knits.assetcare.mocks.model.inventory;


import com.knits.assetcare.model.enums.AssetStatus;
import com.knits.assetcare.model.inventory.Asset;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class AssetMock {

    private static final LocalDate PURCHASE_DATE = LocalDate.of(2019, 1, 1);
    private static final LocalDate PLACED_IN_SERVICE_DATE = LocalDate.of(2020, 1, 1);
    private static final LocalDate WARRANTY_EXPIRATION_DATE = LocalDate.of(2025, 11, 1);

    private static final LocalDateTime CREATED_AT_DATE = LocalDateTime.of(2023, 1, 1, 0, 0);
    private static final LocalDateTime UPDATED_AT_DATE = LocalDateTime.of(2023, 11, 1, 0, 0);

    public static Asset shallowAsset(Long id) {
        return Asset.builder()
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
                .createdAt(CREATED_AT_DATE)
                .updatedAt(UPDATED_AT_DATE)
                .active(true)
                .build();
    }

    public static List<Asset> shallowListOfAssets(int howMany) {
        List<Asset> mockAssets = new ArrayList<>();
        for (int i = 0; i < howMany; i++) {
            mockAssets.add(shallowAsset((long) i));
        }
        return mockAssets;
    }
}
