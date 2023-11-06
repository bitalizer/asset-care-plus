import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { peopleService } from "../api";

export const fetchPeople = createAsyncThunk("person/fetch", async () => {
  const res = await peopleService.findAllPeople();
  return res.data;
});

export const deletePerson = createAsyncThunk("person/delete", async id => {
  const res = await peopleService.deletePerson(id);
  return res.data;
});

export const findPersonById = createAsyncThunk("person/find", async id => {
  const res = await peopleService.getPersonById(id);
  return res.data;
});

export const updatePerson = createAsyncThunk("person/update", async updatedWorkOrder => {
  const res = await peopleService.updatePerson(updatedWorkOrder);
  return res.data;
});
export const searchPeople = createAsyncThunk("person/search", async queryParams => {
  // const queryParams = new URLSearchParams(employeeSearchRequest);
  const res = await peopleService.searchPeople(queryParams);
  return res.data;
});
export const createPerson = createAsyncThunk("person/create", async person => {
  const res = await peopleService.createPerson(person);
  return res.data;
});

const peopleSlice = createSlice({
  name: "peopleSlice",
  initialState: {
    people: [],
    person: [],
  },
  reducers: {
    removePerson(state, action) {
      state.people = state.people.filter(el => el.id !== action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPeople.fulfilled.type, (state, action) => {
      state.people = action.payload;
    });
    builder.addCase(findPersonById.fulfilled.type, (state, action) => {
      state.person = action.payload;
    });
  },
});
export default peopleSlice.reducer;
export const { removePerson } = peopleSlice.actions;
