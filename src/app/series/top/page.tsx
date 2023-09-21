import { Cards } from '@/components/Cards/Cards';

interface ITopSeriesProps {
  searchParams: {
    page: string;
  };
}

export default function TopSeries({ searchParams }: ITopSeriesProps) {
  let { page } = searchParams;

  return (
    <main>
      <Cards category="tv" subCategory="top_rated" page={page || '1'} />
    </main>
  );
}
