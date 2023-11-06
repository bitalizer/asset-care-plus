import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { requestService } from "../api";

export const fetchRequests = createAsyncThunk("request/fetch", async () => {
  const res = await requestService.findAllRequests();
  return res.data;
});

export const deleteRequest = createAsyncThunk("request/delete", async id => {
  const res = await requestService.deleteRequest(id);
  return res.data;
});

export const findRequestById = createAsyncThunk("request/find", async id => {
  const res = await requestService.getRequestById(id);
  return res.data;
});

export const updateRequest = createAsyncThunk("request/update", async updatedWorkOrder => {
  const res = await requestService.updateRequest(updatedWorkOrder);
  return res.data;
});
export const searchRequest = createAsyncThunk("request/search", async queryParams => {
  // const queryParams = new URLSearchParams(employeeSearchRequest);
  const res = await requestService.searchRequests(queryParams);
  return res.data;
});
export const createRequest = createAsyncThunk("request/create", async request => {
  // const queryParams = new URLSearchParams(employeeSearchRequest);
  const res = await requestService.createRequest(request);
  return res.data;
});

const requestSlice = createSlice({
  name: "requestSlice",
  initialState: {
    request: [],
    oneRequest: [],
  },
  reducers: {
    removeRequest(state, action) {
      state.request = state.request.filter(el => el.id !== action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchRequests.fulfilled.type, (state, action) => {
      state.request = action.payload;
    });
    builder.addCase(findRequestById.fulfilled.type, (state, action) => {
      state.oneRequest = action.payload;
    });
  },
});
export default requestSlice.reducer;
export const { removeRequest } = requestSlice.actions;
