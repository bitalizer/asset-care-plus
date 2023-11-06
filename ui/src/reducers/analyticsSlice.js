import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { analyticsService } from "../api";

export const fetchAnalytics = createAsyncThunk("analytics/fetch", async () => {
  const res = await analyticsService.findAllAnalytics();
  return res.data;
});

export const deleteAnalytics = createAsyncThunk("analytics/delete", async id => {
  const res = await analyticsService.deleteAnalytics(id);
  return res.data;
});

export const findAnalyticsById = createAsyncThunk("analytics/find", async id => {
  const res = await analyticsService.getAnalyticsById(id);
  return res.data;
});

export const updateAnalytics = createAsyncThunk("analytics/update", async updatedFile => {
  const res = await analyticsService.updateAnalytics(updatedFile);
  return res.data;
});
export const searchAnalytics = createAsyncThunk("analytics/search", async queryParams => {
  // const queryParams = new URLSearchParams(employeeSearchRequest);
  const res = await analyticsService.searchAnalytics(queryParams);
  return res.data;
});
export const createAnalytics = createAsyncThunk("analytics/create", async files => {
  const res = await analyticsService.createAnalytics(files);
  return res.data;
});

const analyticsSlice = createSlice({
  name: "analyticsSlice",
  initialState: {
    analytics: [],
    oneAnalytics: [],
    loading: true,
    dueDateData: [],
    measurementOfTimeData: [],
  },
  reducers: {
    removeAnalytics(state, action) {
      state.analytics = state.analytics.filter(el => el.id !== action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchAnalytics.fulfilled.type, (state, action) => {
      state.analytics = action.payload;
      state.dueDateData = state.analytics.dueDateData;
      state.measurementOfTimeData = state.analytics.measurementOfTimeData;
      state.loading = false;
    });
    builder.addCase(fetchAnalytics.pending.type, state => {
      state.loading = true;
    });
    builder.addCase(findAnalyticsById.fulfilled.type, (state, action) => {
      state.oneAnalytics = action.payload;
    });
  },
});
export default analyticsSlice.reducer;
export const { removeAnalytics } = analyticsSlice.actions;
