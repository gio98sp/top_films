import { Cards } from '@/components/Cards/Cards';

interface IPopularMoviesProps {
  searchParams: {
    page: string;
  };
}

export default function PopularMovies({ searchParams }: IPopularMoviesProps) {
  let { page } = searchParams;

  return (
    <main>
      <Cards category="movie" subCategory="popular" page={page || '1'} />
    </main>
  );
}
