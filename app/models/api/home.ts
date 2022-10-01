import { MovieItem } from '../reducers/movie_item';

export interface ISearchResponse {
  page: number;
  results: Array<MovieItem>;
  totalPages: number;
  loading: boolean;
  error: object;
}
