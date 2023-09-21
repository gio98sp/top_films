import { Cards } from '@/components/Cards/Cards';

interface IPopularSeriesProps {
  searchParams: {
    page: string;
  };
}

export default function PopularSeries({ searchParams }: IPopularSeriesProps) {
  let { page } = searchParams;

  return (
    <main>
      <Cards category="tv" subCategory="popular" page={page || '1'} />
    </main>
  );
}
