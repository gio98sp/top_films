import { Cards } from '@/components/Cards/Cards';
import { SkeletonCards } from '@/components/Cards/SkeletonCards';
import { TitleCards } from '@/components/Cards/TitleCards';
import { Suspense } from 'react';

interface IPopularSeriesProps {
  searchParams: {
    page: string;
  };
}

export default function PopularSeries({ searchParams }: IPopularSeriesProps) {
  let { page } = searchParams;

  return (
    <main className="max-w-screen-xl m-auto mb-16 md:mb-24 px-4 md:px-7 flex flex-col gap-16 md:gap-24">
      <TitleCards category="tv" subCategory="popular" />

      <Suspense fallback={<SkeletonCards />}>
        <Cards category="tv" subCategory="popular" page={page || '1'} />
      </Suspense>
    </main>
  );
}
