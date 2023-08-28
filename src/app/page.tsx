import { Card } from '@/components/Home/Card';

export default function Home() {

  return (
    <main>
      <Card urlTMDBApi={process.env.API_URL_MOVIES_POPULAR} title='Filmes mais populares' category='movie' />
      <Card urlTMDBApi={process.env.API_URL_SERIES_POPULAR} title='Séries mais populares' category='tv' />
    </main>
  );
}
