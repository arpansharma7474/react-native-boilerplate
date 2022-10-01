import { MovieItem } from '../reducers/movie_item';

export interface ISearchResponse {
  page: number;
  results: Array<MovieItem>;
  total_pages: number;
  total_results: number;
}
