import { configureStore } from "@reduxjs/toolkit";
import { filmsSlice } from "./films/slice";

export const store = configureStore({
  reducer: {
    films: filmsSlice.reducer,
  },
});
