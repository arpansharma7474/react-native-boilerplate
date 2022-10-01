import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ApiConfig from 'app/config/api-config';
import { ISearchResponse } from 'app/models/api/home';
import { executeGetRequest } from 'app/services/fetchUtils';

const initialState: ISearchResponse = {
  page: 0,
  results: [],
  totalPages: 0,
  loading: true,
  error: {},
};

export const fetchMovies = createAsyncThunk<
  ISearchResponse,
  { query: string; page: number }
>('movies/results', async (params, { rejectWithValue }) => {
  try {
    const response: ISearchResponse = await executeGetRequest(
      `${ApiConfig.SEARCH_MOVIES}?query=${params.query}&page=${params.page}`,
    );
    return response;
  } catch (e) {
    return rejectWithValue(e);
  }
});

const resultsSlice = createSlice({
  name: 'movie_results',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMovies.fulfilled, (state, { payload }) => {
        state.results = payload.results;
        state.page = payload.page;
        state.totalPages = payload.totalPages;
      })
      .addCase(fetchMovies.pending, state => {
        state.loading = true;
      })
      .addCase(fetchMovies.rejected, (state, { payload }) => {
        state.error = {
          message: payload.message,
          statusCode: payload.statusCode,
        };
      });
  },
});

export default resultsSlice;
