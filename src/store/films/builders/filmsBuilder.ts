import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { FilmsData } from "types/films";
import { filmsPopularAsync } from "../thunks";

export const filmsAsyncBuilder = (builder: ActionReducerMapBuilder<FilmsData>) => {
  builder
    .addCase(filmsPopularAsync.fulfilled, (state, action) => {
      state.films = action.payload;
      state.loading = false;
    })
    .addCase(filmsPopularAsync.pending, (state) => {
      state.loading = true;
    })
    .addCase(filmsPopularAsync.rejected, (state) => {
      state.loading = false;
    });
}
