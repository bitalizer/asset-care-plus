import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { locationService } from "../api";

export const fetchLocation = createAsyncThunk("location/fetch", async () => {
  const res = await locationService.findAllLocations();
  return res.data;
});

export const deleteLocation = createAsyncThunk("location/delete", async id => {
  const res = await locationService.deleteLocation(id);
  return res.data;
});

export const findLocationById = createAsyncThunk("location/find", async id => {
  const res = await locationService.getLocationById(id);
  return res.data;
});

export const updateLocation = createAsyncThunk("location/update", async updatedWorkOrder => {
  const res = await locationService.updateLocation(updatedWorkOrder);
  return res.data;
});
export const createLocation = createAsyncThunk("location/create", async location => {
  const res = await locationService.createLocation(location);
  return res.data;
});
export const searchLocation = createAsyncThunk("location/search", async queryParams => {
  // const queryParams = new URLSearchParams(employeeSearchRequest);
  const res = await locationService.searchLocations(queryParams);
  return res.data;
});

const locationSlice = createSlice({
  name: "locationSlice",
  initialState: {
    locations: [],
    location: [],
  },
  reducers: {
    removeLocation(state, action) {
      state.locations = state.locations.filter(el => el.id !== action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchLocation.fulfilled.type, (state, action) => {
      state.locations = action.payload;
    });
    builder.addCase(findLocationById.fulfilled.type, (state, action) => {
      state.location = action.payload;
    });
  },
});
export default locationSlice.reducer;
export const { removeLocation } = locationSlice.actions;
