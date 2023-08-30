export interface IgetMoviesOrSeriesProps {
  category: 'movie' | 'tv';
  subCategory: 'top_rated' | 'popular';
  page: number;
}

export interface IgetMoviesOrSeries {
  page: number;
  results: object[];
  total_pages: number;
  total_results: number;
}
