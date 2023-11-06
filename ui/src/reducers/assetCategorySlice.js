import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { assetCategoryService } from "../api";

export const fetchAssetCategory = createAsyncThunk("assetCategory/fetch", async () => {
  const res = await assetCategoryService.findAllAssetCategory();
  return res.data;
});

export const deleteAssetCategory = createAsyncThunk("assetCategory/delete", async id => {
  const res = await assetCategoryService.deleteAssetCategory(id);
  return res.data;
});

export const searchAssetCategory = createAsyncThunk("assetCategory/search", async queryParams => {
  // const queryParams = new URLSearchParams(employeeSearchRequest);
  const res = await assetCategoryService.searchAssetCategory(queryParams);
  return res.data;
});
export const createAssetCategory = createAsyncThunk("assetCategory/search", async assetCategory => {
  const res = await assetCategoryService.createAssetCategory(assetCategory);
  return res.data;
});

const assetCategorySlice = createSlice({
  name: "assetCategorySliceSlice",
  initialState: {
    assetCategory: [],
  },
  reducers: {
    removeAssetCategory(state, action) {
      state.assetCategory = state.assetCategory.filter(el => el.id !== action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchAssetCategory.fulfilled.type, (state, action) => {
      state.assetCategory = action.payload;
    });
  },
});
export default assetCategorySlice.reducer;
export const { removeAssetCategory } = assetCategorySlice.actions;
