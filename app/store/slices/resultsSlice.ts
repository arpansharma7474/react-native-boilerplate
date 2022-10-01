import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISearchResponse } from 'app/models/api/login';

const initialState: ISearchResponse = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

const resultsSlice = createSlice({
  name: 'movie_results',
  initialState,
  reducers: {
    get_movies: (state, action: PayloadAction<undefined>) => {},
  },
});

export default resultsSlice;
