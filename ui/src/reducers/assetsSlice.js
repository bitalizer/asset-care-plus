import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { assetService } from "../api";

export const fetchAsset = createAsyncThunk("asset/fetch", async () => {
  const res = await assetService.findAllAssets();
  return res.data;
});

export const deleteAsset = createAsyncThunk("asset/delete", async id => {
  const res = await assetService.deleteAsset(id);
  return res.data;
});

export const findAssetById = createAsyncThunk("asset/find", async id => {
  const res = await assetService.getAssetById(id);
  return res.data;
});

export const updateAsset = createAsyncThunk("asset/update", async updatedWorkOrder => {
  const res = await assetService.updateAsset(updatedWorkOrder);
  return res.data;
});
export const searchAsset = createAsyncThunk("asset/search", async queryParams => {
  // const queryParams = new URLSearchParams(employeeSearchRequest);
  const res = await assetService.searchAssets(queryParams);
  return res.data;
});
export const createAsset = createAsyncThunk("asset/create", async asset => {
  const res = await assetService.createAsset(asset);
  return res.data;
});

const assetsSlice = createSlice({
  name: "assetsReducer",
  initialState: {
    assets: [],
    oneAsset: [],
  },
  reducers: {
    removeAsset(state, action) {
      state.assets = state.assets.filter(el => el.id !== action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchAsset.fulfilled.type, (state, action) => {
      state.assets = action.payload;
    });
    builder.addCase(findAssetById.fulfilled.type, (state, action) => {
      state.oneAsset = action.payload;
    });
  },
});
export default assetsSlice.reducer;
export const { removeAsset } = assetsSlice.actions;
