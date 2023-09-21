import { Cards } from '@/components/Cards/Cards';

interface ITopMoviesProps {
  searchParams: {
    page: string;
  };
}

export default function TopMovies({ searchParams }: ITopMoviesProps) {
  let { page } = searchParams;

  return (
    <main>
      <Cards category="movie" subCategory="top_rated" page={page || '1'} />
    </main>
  );
}
