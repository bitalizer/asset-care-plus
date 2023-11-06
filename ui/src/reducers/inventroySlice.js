import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { inventoryService } from "../api";

export const fetchInventories = createAsyncThunk("inventory/fetch", async () => {
  const res = await inventoryService.findAllInventories();
  return res.data;
});

export const deleteInventory = createAsyncThunk("inventory/delete", async id => {
  const res = await inventoryService.deleteInventory(id);
  return res.data;
});

export const findInventoryById = createAsyncThunk("inventory/find", async id => {
  const res = await inventoryService.getInventoryById(id);
  return res.data;
});

export const updateInventory = createAsyncThunk("inventory/update", async updatedInventory => {
  const res = await inventoryService.updateInventory(updatedInventory);
  return res.data;
});
export const searchInventory = createAsyncThunk("inventory/search", async queryParams => {
  // const queryParams = new URLSearchParams(employeeSearchRequest);
  const res = await inventoryService.searchInventories(queryParams);
  return res.data;
});
export const createInventory = createAsyncThunk("inventory/create", async inventory => {
  const res = await inventoryService.createInventory(inventory);
  return res.data;
});

const inventorySlice = createSlice({
  name: "inventorySlice",
  initialState: {
    inventories: [],
    inventory: [],
  },
  reducers: {
    removeInventory(state, action) {
      state.inventories = state.inventories.filter(el => el.id !== action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchInventories.fulfilled.type, (state, action) => {
      state.inventories = action.payload;
    });
    builder.addCase(findInventoryById.fulfilled.type, (state, action) => {
      state.inventory = action.payload;
    });
  },
});
export default inventorySlice.reducer;
export const { removeInventory } = inventorySlice.actions;
