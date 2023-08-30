import { IgetMoviesOrSeries, IgetMoviesOrSeriesProps } from '@/types/getTmdbApi';

export const getMoviesOrSeries = async ({ category, subCategory, page }: IgetMoviesOrSeriesProps): Promise<IgetMoviesOrSeries> => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `${process.env.NEXT_PUBLIC_TOKEN_TMDB}`,
    },
  };

  const res = await fetch(
    `${baseUrl}/${category}/${subCategory}?language=pt-BR&region=BR&page=${page}`,
    options
  );
  const data = await res.json();

  return data;
};
