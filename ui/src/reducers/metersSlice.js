import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { metersService } from "../api";

export const fetchMeters = createAsyncThunk("meters/fetch", async () => {
  const res = await metersService.findAllMeters();
  return res.data;
});

export const deleteMeter = createAsyncThunk("meters/delete", async id => {
  const res = await metersService.deleteMeter(id);
  return res.data;
});

export const findMeterById = createAsyncThunk("meters/find", async id => {
  const res = await metersService.getMeterById(id);
  return res.data;
});

export const updateMeter = createAsyncThunk("meters/update", async updatedWorkOrder => {
  const res = await metersService.updateMeter(updatedWorkOrder);
  return res.data;
});
export const searchMeter = createAsyncThunk("meters/search", async queryParams => {
  // const queryParams = new URLSearchParams(employeeSearchRequest);
  const res = await metersService.searchMeters(queryParams);
  return res.data;
});
export const createMeter = createAsyncThunk("meters/create", async meters => {
  const res = await metersService.createMeter(meters);
  return res.data;
});

const metersSlice = createSlice({
  name: "metersSlice",
  initialState: {
    meters: [],
    oneMeter: [],
  },
  reducers: {
    removeMeter(state, action) {
      state.meters = state.meters.filter(el => el.id !== action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchMeters.fulfilled.type, (state, action) => {
      state.meters = action.payload;
    });
    builder.addCase(findMeterById.fulfilled.type, (state, action) => {
      state.oneMeter = action.payload;
    });
  },
});
export default metersSlice.reducer;
export const { removeMeter } = metersSlice.actions;
