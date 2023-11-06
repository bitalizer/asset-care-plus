import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { purchaseOrdersCategoryService } from "../api";

export const fetchPurchaseOrdersCategory = createAsyncThunk(
  "purchaseOrdersCategory/fetch",
  async () => {
    const res = await purchaseOrdersCategoryService.findAllPurchaseOrdersCategory();
    return res.data;
  }
);

export const deletePurchaseOrdersCategory = createAsyncThunk(
  "purchaseOrdersCategory/delete",
  async id => {
    const res = await purchaseOrdersCategoryService.deletePurchaseOrdersCategory(id);
    return res.data;
  }
);

export const searchPurchaseOrdersCategory = createAsyncThunk(
  "purchaseOrdersCategory/search",
  async queryParams => {
    // const queryParams = new URLSearchParams(employeeSearchRequest);
    const res = await purchaseOrdersCategoryService.searchPurchaseOrdersCategory(queryParams);
    return res.data;
  }
);
export const createPurchaseOrdersCategory = createAsyncThunk(
  "purchaseOrdersCategory/search",
  async purchaseOrdersCategory => {
    const res = await purchaseOrdersCategoryService.createPurchaseOrdersCategory(
      purchaseOrdersCategory
    );
    return res.data;
  }
);

const purchaseOrdersCategorySlice = createSlice({
  name: "purchaseOrdersCategory",
  initialState: {
    purchaseOrdersCategory: [],
  },
  reducers: {
    removePurchaseOrdersCategory(state, action) {
      state.purchaseOrdersCategory = state.purchaseOrdersCategory.filter(
        el => el.id !== action.payload
      );
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPurchaseOrdersCategory.fulfilled.type, (state, action) => {
      state.purchaseOrdersCategory = action.payload;
    });
  },
});
export default purchaseOrdersCategorySlice.reducer;
export const { removePurchaseOrdersCategory } = purchaseOrdersCategorySlice.actions;
