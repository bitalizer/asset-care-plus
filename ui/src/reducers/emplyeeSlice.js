import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { employeeService } from "../api";

export const fetchEmployees = createAsyncThunk("asset/fetch", async () => {
  const res = await employeeService.findAllEmployees();
  return res.data;
});

export const deleteEmployee = createAsyncThunk("asset/delete", async id => {
  const res = await employeeService.deleteEmployee(id);
  return res.data;
});

export const findEmployeeById = createAsyncThunk("asset/find", async id => {
  const res = await employeeService.getEmployeeById(id);
  return res.data;
});

export const updateEmployee = createAsyncThunk("asset/update", async updatedEmployee => {
  const res = await employeeService.updateEmployee(updatedEmployee);
  return res.data;
});
export const searchEmployees = createAsyncThunk("asset/search", async queryParams => {
  // const queryParams = new URLSearchParams(employeeSearchRequest);
  const res = await employeeService.searchEmployees(queryParams);
  return res.data;
});
export const createEmployee = createAsyncThunk("asset/create", async employee => {
  const res = await employeeService.createEmployee(employee);
  return res.data;
});

const employeeSlice = createSlice({
  name: "employeeSlice",
  initialState: {
    employees: [],
    oneEmployee: [],
  },
  reducers: {
    removeEmployee(state, action) {
      state.employees = state.employees.filter(el => el.id !== action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchEmployees.fulfilled.type, (state, action) => {
      state.employees = action.payload;
    });
    builder.addCase(findEmployeeById.fulfilled.type, (state, action) => {
      state.oneEmployee = action.payload;
    });
  },
});
export default employeeSlice.reducer;
export const { removeEmployee } = employeeSlice.actions;
