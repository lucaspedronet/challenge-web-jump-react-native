import { createSlice } from "@reduxjs/toolkit";
import { filmsAsyncBuilder } from "./builders/filmsBuilder";
import { filmsInitialState } from "./initialState";

export const filmsSlice = createSlice({
  name: "films",
  initialState: filmsInitialState,
  reducers: {},
  extraReducers: (builder) => {filmsAsyncBuilder(builder)},
});
