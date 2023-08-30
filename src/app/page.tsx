import { Cards } from '@/components/Home/Cards';

export default function Home() {
  return (
    <main>
      <Cards
        category="movie"
        subCategory="popular"
      />
      {/* <Cards
        category="tv"
        subCategory="popular"
      /> */}
    </main>
  );
}
