import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { workOrdersCategoryService } from "../api";

export const fetchWorkOrdersCategory = createAsyncThunk("workOrdersCategory/fetch", async () => {
  const res = await workOrdersCategoryService.findAllWorkOrdersCategory();
  return res.data;
});

export const deleteWorkOrdersCategory = createAsyncThunk("workOrdersCategory/delete", async id => {
  const res = await workOrdersCategoryService.deleteWorkOrdersCategory(id);
  return res.data;
});

export const searchWorkOrdersCategory = createAsyncThunk(
  "workOrdersCategory/search",
  async queryParams => {
    // const queryParams = new URLSearchParams(employeeSearchRequest);
    const res = await workOrdersCategoryService.searchWorkOrdersCategory(queryParams);
    return res.data;
  }
);
export const createWorkOrdersCategory = createAsyncThunk(
  "workOrdersCategory/search",
  async workOrder => {
    const res = await workOrdersCategoryService.createWorkOrdersCategory(workOrder);
    return res.data;
  }
);

const workOrderSlice = createSlice({
  name: "workOrdersCategorySlice",
  initialState: {
    workOrdersCategory: [],
  },
  reducers: {
    removeWorkOrdersCategory(state, action) {
      state.workOrdersCategory = state.workOrdersCategory.filter(el => el.id !== action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchWorkOrdersCategory.fulfilled.type, (state, action) => {
      state.workOrdersCategory = action.payload;
    });
  },
});
export default workOrderSlice.reducer;
export const { removeWorkOrdersCategory } = workOrderSlice.actions;
