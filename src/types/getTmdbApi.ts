export interface IgetMoviesOrSeriesProps {
  category: 'movie' | 'tv' | 'trending' | 'search';
  subCategory?: 'top_rated' | 'popular';
  query?: string
  page: number;
}

export interface IgetDetailsProps {
  [key: string]: string | number
}

export interface IgetMoviesOrSeries {
  page: number;
  results: object[];
  total_pages: number;
  total_results: number;
}
