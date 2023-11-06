import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { teamsService } from "../api";

export const fetchTeams = createAsyncThunk("teams/fetch", async () => {
  const res = await teamsService.findAllTeams();
  return res.data;
});

export const deleteTeam = createAsyncThunk("teams/delete", async id => {
  const res = await teamsService.deleteTeam(id);
  return res.data;
});

export const findTeamById = createAsyncThunk("teams/find", async id => {
  const res = await teamsService.getTeamById(id);
  return res.data;
});

export const updateTeam = createAsyncThunk("teams/update", async updatedWorkOrder => {
  const res = await teamsService.updateTeam(updatedWorkOrder);
  return res.data;
});
export const searchTeams = createAsyncThunk("teams/search", async queryParams => {
  // const queryParams = new URLSearchParams(employeeSearchRequest);
  const res = await teamsService.searchTeams(queryParams);
  return res.data;
});
export const createTeam = createAsyncThunk("teams/create", async maintenance => {
  const res = await teamsService.createTeam(maintenance);
  return res.data;
});

const teamsSlice = createSlice({
  name: "assetsReducer",
  initialState: {
    teams: [],
    oneTeam: [],
  },
  reducers: {
    removeTeam(state, action) {
      state.teams = state.teams.filter(el => el.id !== action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchTeams.fulfilled.type, (state, action) => {
      state.teams = action.payload;
    });
    builder.addCase(findTeamById.fulfilled.type, (state, action) => {
      state.oneTeam = action.payload;
    });
  },
});
export default teamsSlice.reducer;
export const { removeTeam } = teamsSlice.actions;
