import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { customerService } from "../api";

export const fetchCustomers = createAsyncThunk("customers/fetch", async () => {
  const res = await customerService.findAllCustomers();
  return res.data;
});

export const deleteCustomers = createAsyncThunk("customers/delete", async id => {
  const res = await customerService.deleteCustomer(id);
  return res.data;
});

export const findCustomersById = createAsyncThunk("customers/find", async id => {
  const res = await customerService.getCustomerById(id);
  return res.data;
});

export const updateCustomers = createAsyncThunk("customers/update", async updatedCustomer => {
  // const queryParams = new URLSearchParams(employeeSearchRequest);
  const res = await customerService.updateCustomer(updatedCustomer);
  return res.data;
});
export const searchCustomers = createAsyncThunk("customers/search", async queryParams => {
  // const queryParams = new URLSearchParams(employeeSearchRequest);
  const res = await customerService.searchCustomers(queryParams);
  return res.data;
});

export const createCustomer = createAsyncThunk("customers/create", async customer => {
  const res = await customerService.createCustomer(customer);
  return res.data;
});

const customerSlice = createSlice({
  name: "customersReducer",
  initialState: {
    customers: [],
    customer: [],
  },
  reducers: {
    removeCustomer(state, action) {
      state.customers = state.customers.filter(el => el.id !== action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchCustomers.fulfilled.type, (state, action) => {
      state.customers = action.payload;
    });
    builder.addCase(findCustomersById.fulfilled.type, (state, action) => {
      state.customer = action.payload;
    });
  },
});
export default customerSlice.reducer;
export const { removeCustomer } = customerSlice.actions;
