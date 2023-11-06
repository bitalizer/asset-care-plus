import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { timerCategoryService } from "../api";

export const fetchTimerCategory = createAsyncThunk("timerCategory/fetch", async () => {
  const res = await timerCategoryService.findAllTimerCategory();
  return res.data;
});

export const deleteTimerCategory = createAsyncThunk("timerCategory/delete", async id => {
  const res = await timerCategoryService.deleteTimerCategory(id);
  return res.data;
});

export const searchTimerCategory = createAsyncThunk("timerCategory/search", async queryParams => {
  // const queryParams = new URLSearchParams(employeeSearchRequest);
  const res = await timerCategoryService.searchTimerCategory(queryParams);
  return res.data;
});
export const createTimerCategory = createAsyncThunk("timerCategory/search", async timerCategory => {
  const res = await timerCategoryService.createTimerCategory(timerCategory);
  return res.data;
});

const timerCategorySlice = createSlice({
  name: "timerCategorySlice",
  initialState: {
    timerCategory: [],
  },
  reducers: {
    removeTimerCategory(state, action) {
      state.timerCategory = state.timerCategory.filter(el => el.id !== action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchTimerCategory.fulfilled.type, (state, action) => {
      state.timerCategory = action.payload;
    });
  },
});
export default timerCategorySlice.reducer;
export const { removeTimerCategory } = timerCategorySlice.actions;
