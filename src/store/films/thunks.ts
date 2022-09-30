import { createAsyncThunk } from "@reduxjs/toolkit";

import { getFilms } from '~services';

export const filmsPopularAsync = createAsyncThunk(
  "films/fetchByPopularFilms",
  async () => {
    const data = await getFilms();

    return data;
  },
);
