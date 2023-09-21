const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN_TMDB}`,
  },
};

interface IgetMoviesOrSeriesProps {
  category: 'movie' | 'tv' | 'trending' | 'search';
  subCategory?: 'top_rated' | 'popular';
  query?: string;
  page: string;
}

export interface IgetMoviesOrSeries {
  page: number;
  results: object[];
  total_pages: number;
  total_results: number;
}

export const getMoviesOrSeries = async ({
  category,
  subCategory,
  query,
  page,
}: IgetMoviesOrSeriesProps): Promise<IgetMoviesOrSeries> => {
  let res;

  if (category === 'movie' || category === 'tv') {
    res = await fetch(
      `${baseUrl}/${category}/${subCategory}?language=pt-BR&region=BR&page=${page}`,
      options
    );
  }

  if (category === 'trending') {
    res = await fetch(`${baseUrl}/${category}/all/week?language=pt-BR&page=${page}`, options);
  }

  if (category === 'search') {
    res = await fetch(
      `${baseUrl}/search/multi?query=${query}&language=pt-BR&page=${page}`,
      options
    );
  }

  const data = await res?.json();

  return data;
};

interface IgetDetailsMoviesOrSeries {
  [key: string]: string | number;
}

export const getDetailsMoviesOrSeries = async (id: number): Promise<IgetDetailsMoviesOrSeries> => {
  let res = await fetch(`${baseUrl}/movie/${id}?language=pt-BR`, options);
  let data = await res.json();

  if (data.success === false) {
    res = await fetch(`${baseUrl}/tv/${id}?language=pt-BR`, options);
    data = await res.json();
  }

  return data;
};
