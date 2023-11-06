import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { filesService } from "../api";

export const fetchFiles = createAsyncThunk("file/fetch", async () => {
  const res = await filesService.findAllFiles();
  return res.data;
});

export const deleteFiles = createAsyncThunk("file/delete", async id => {
  const res = await filesService.deleteFile(id);
  return res.data;
});

export const findFileById = createAsyncThunk("file/find", async id => {
  const res = await filesService.getFileById(id);
  return res.data;
});

export const updateFile = createAsyncThunk("file/update", async updatedFile => {
  const res = await filesService.updateFile(updatedFile);
  return res.data;
});
export const searchFile = createAsyncThunk("file/search", async queryParams => {
  // const queryParams = new URLSearchParams(employeeSearchRequest);
  const res = await filesService.searchFiles(queryParams);
  return res.data;
});
export const createFile = createAsyncThunk("file/create", async files => {
  const res = await filesService.createFile(files);
  return res.data;
});

const filesSlice = createSlice({
  name: "fileSlice",
  initialState: {
    files: [],
    oneFile: [],
  },
  reducers: {
    removeFile(state, action) {
      state.files = state.files.filter(el => el.id !== action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchFiles.fulfilled.type, (state, action) => {
      state.files = action.payload;
    });
    builder.addCase(findFileById.fulfilled.type, (state, action) => {
      state.oneFile = action.payload;
    });
  },
});
export default filesSlice.reducer;
export const { removeFile } = filesSlice.actions;
