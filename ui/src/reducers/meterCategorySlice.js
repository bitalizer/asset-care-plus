import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { meterCategoryService } from "../api";

export const fetchMeterCategory = createAsyncThunk("meterCategory/fetch", async () => {
  const res = await meterCategoryService.findAllMeterCategory();
  return res.data;
});

export const deleteMeterCategory = createAsyncThunk("meterCategory/delete", async id => {
  const res = await meterCategoryService.deleteMeterCategory(id);
  return res.data;
});

export const searchMeterCategory = createAsyncThunk("meterCategory/search", async queryParams => {
  // const queryParams = new URLSearchParams(employeeSearchRequest);
  const res = await meterCategoryService.searchMeterCategory(queryParams);
  return res.data;
});
export const createMeterCategory = createAsyncThunk("meterCategory/search", async meterCategory => {
  const res = await meterCategoryService.createMeterCategory(meterCategory);
  return res.data;
});

const meterCategorySlice = createSlice({
  name: "meterCategorySlice",
  initialState: {
    metersCategory: [],
  },
  reducers: {
    removeMeterCategory(state, action) {
      state.metersCategory = state.metersCategory.filter(el => el.id !== action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchMeterCategory.fulfilled.type, (state, action) => {
      state.metersCategory = action.payload;
    });
  },
});
export default meterCategorySlice.reducer;
export const { removeMeterCategory } = meterCategorySlice.actions;
