import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { maintenanceService } from "../api";

export const fetchMaintenance = createAsyncThunk("maintenance/fetch", async () => {
  const res = await maintenanceService.findAllMaintenances();
  return res.data;
});

export const deleteMaintenance = createAsyncThunk("maintenance/delete", async id => {
  const res = await maintenanceService.deleteMaintenance(id);
  return res.data;
});

export const findMaintenanceById = createAsyncThunk("maintenance/find", async id => {
  const res = await maintenanceService.getMaintenanceById(id);
  return res.data;
});

export const updateMaintenance = createAsyncThunk("maintenance/update", async updatedWorkOrder => {
  const res = await maintenanceService.updateMaintenance(updatedWorkOrder);
  return res.data;
});
export const searchMaintenance = createAsyncThunk("maintenance/search", async queryParams => {
  // const queryParams = new URLSearchParams(employeeSearchRequest);
  const res = await maintenanceService.searchMaintenances(queryParams);
  return res.data;
});
export const createMaintenance = createAsyncThunk("maintenance/create", async maintenance => {
  const res = await maintenanceService.createMaintenance(maintenance);
  return res.data;
});

const maintenanceSlice = createSlice({
  name: "maintenanceReducer",
  initialState: {
    maintenance: [],
    oneMaintenance: [],
  },
  reducers: {
    removeMaintenance(state, action) {
      state.maintenance = state.maintenance.filter(el => el.id !== action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchMaintenance.fulfilled.type, (state, action) => {
      state.maintenance = action.payload;
    });
    builder.addCase(findMaintenanceById.fulfilled.type, (state, action) => {
      state.oneMaintenance = action.payload;
    });
  },
});
export default maintenanceSlice.reducer;
export const { removeMaintenance } = maintenanceSlice.actions;
