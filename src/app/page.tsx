import { Cards } from '@/components/Cards/Cards';

interface IHomeProps {
  searchParams: {
    page: string;
  };
}

export default function Home({ searchParams }: IHomeProps) {
  let { page } = searchParams;

  return (
    <main>
      <Cards category="trending" page={page || '1'} />
    </main>
  );
}
