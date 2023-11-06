import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { workOrderService } from "../api";

export const fetchWorkOrder = createAsyncThunk("workOrder/fetch", async () => {
  const res = await workOrderService.findAllWorkOrders();
  return res.data;
});

export const deleteWorkOrder = createAsyncThunk("workOrder/delete", async id => {
  const res = await workOrderService.deleteWorkOrder(id);
  return res.data;
});

export const findWorkOrderById = createAsyncThunk("workOrder/find", async id => {
  const res = await workOrderService.getWorkOrderById(id);
  return res.data;
});

export const updateWorkOrder = createAsyncThunk("workOrder/update", async updatedWorkOrder => {
  // const queryParams = new URLSearchParams(employeeSearchRequest);
  const res = await workOrderService.updateWorkOrder(updatedWorkOrder);
  return res.data;
});
export const searchWorkOrders = createAsyncThunk("workOrder/search", async queryParams => {
  // const queryParams = new URLSearchParams(employeeSearchRequest);
  const res = await workOrderService.searchWorkOrders(queryParams);
  return res.data;
});
export const createWorkOrders = createAsyncThunk("workOrder/search", async workOrder => {
  const res = await workOrderService.createWorkOrder(workOrder);
  return res.data;
});

const workOrderSlice = createSlice({
  name: "workOrdersSlice",
  initialState: {
    workOrders: [],
    workOrder: [],
  },
  reducers: {
    removeWorkOrders(state, action) {
      state.workOrders = state.workOrders.filter(el => el.id !== action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchWorkOrder.fulfilled.type, (state, action) => {
      state.workOrders = action.payload;
    });
    builder.addCase(findWorkOrderById.fulfilled.type, (state, action) => {
      state.workOrder = action.payload;
    });
  },
});
export default workOrderSlice.reducer;
export const { removeWorkOrders } = workOrderSlice.actions;
