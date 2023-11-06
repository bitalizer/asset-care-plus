import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { purchaseOrderService } from "../api";

export const fetchPurchaseOrders = createAsyncThunk("purchaseOrder/fetch", async () => {
  const res = await purchaseOrderService.findAllPurchaseOrders();
  return res.data;
});

export const deletePurchaseOrder = createAsyncThunk("purchaseOrder/delete", async id => {
  const res = await purchaseOrderService.deletePurchaseOrder(id);
  return res.data;
});

export const findPurchaseOrderById = createAsyncThunk("purchaseOrder/find", async id => {
  const res = await purchaseOrderService.getPurchaseOrderById(id);
  return res.data;
});

export const updatePurchaseOrder = createAsyncThunk(
  "purchaseOrder/update",
  async updatedWorkOrder => {
    const res = await purchaseOrderService.updatePurchaseOrder(updatedWorkOrder);
    return res.data;
  }
);
export const searchPurchaseOrders = createAsyncThunk("purchaseOrder/search", async queryParams => {
  // const queryParams = new URLSearchParams(employeeSearchRequest);
  const res = await purchaseOrderService.searchPurchaseOrders(queryParams);
  return res.data;
});
export const createPurchaseOrder = createAsyncThunk("purchaseOrder/create", async maintenance => {
  const res = await purchaseOrderService.createPurchaseOrder(maintenance);
  return res.data;
});

const purchaseOrderSlice = createSlice({
  name: "purchaseOrderSlice",
  initialState: {
    purchaseOrders: [],
    onePurchaseOrder: [],
  },
  reducers: {
    removePurchaseOrder(state, action) {
      state.maintenance = state.maintenance.filter(el => el.id !== action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPurchaseOrders.fulfilled.type, (state, action) => {
      state.purchaseOrders = action.payload;
    });
    builder.addCase(findPurchaseOrderById.fulfilled.type, (state, action) => {
      state.onePurchaseOrder = action.payload;
    });
  },
});
export default purchaseOrderSlice.reducer;
export const { removePurchaseOrder } = purchaseOrderSlice.actions;
