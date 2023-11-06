import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { vendorService } from "../api";

export const fetchVendors = createAsyncThunk("vendors/fetch", async () => {
  const res = await vendorService.findAllVendors();
  return res.data;
});

export const deleteVendors = createAsyncThunk("vendors/delete", async id => {
  const res = await vendorService.deleteVendor(id);
  return res.data;
});

export const findVendorById = createAsyncThunk("vendors/find", async id => {
  const res = await vendorService.getVendorById(id);
  console.log(res.data);
  return res.data;
});

export const updateVendor = createAsyncThunk("vendors/update", async updatedVendor => {
  // const queryParams = new URLSearchParams(employeeSearchRequest);
  const res = await vendorService.updateVendor(updatedVendor);
  return res.data;
});
export const searchVendor = createAsyncThunk("vendors/search", async queryParams => {
  // const queryParams = new URLSearchParams(employeeSearchRequest);
  const res = await vendorService.searchVendors(queryParams);
  return res.data;
});

export const createVendor = createAsyncThunk("vendors/create", async vendor => {
  const res = await vendorService.createVendor(vendor);
  return res.data;
});

const vendorsSlice = createSlice({
  name: "vendorsSlice",
  initialState: {
    vendors: [],
    vendor: [],
  },
  reducers: {
    removeVendors(state, action) {
      state.vendors = state.vendors.filter(el => el.id !== action.payload);
    },
    clearVendor(state) {
      state.vendor = [];
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchVendors.fulfilled.type, (state, action) => {
      state.vendors = action.payload;
    });
    builder.addCase(findVendorById.fulfilled.type, (state, action) => {
      state.vendor = action.payload;
    });
  },
});
export default vendorsSlice.reducer;
export const { removeVendors, clearVendor } = vendorsSlice.actions;
