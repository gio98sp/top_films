import { Cards } from '@/components/Cards/Cards';
import { SkeletonCards } from '@/components/Cards/SkeletonCards';
import { TitleCards } from '@/components/Cards/TitleCards';
import { Suspense } from 'react';

interface IQueryProps {
  searchParams: {
    query: string;
    page: string;
  };
}

export default function query({ searchParams }: IQueryProps) {
  const { query, page } = searchParams;

  return (
    <main className="max-w-screen-xl m-auto mb-16 md:mb-24 px-4 md:px-7 flex flex-col gap-16 md:gap-24">
      <TitleCards category="search" query={query} />

      <Suspense fallback={<SkeletonCards />}>
        <Cards category="search" query={query} page={page || '1'} />
      </Suspense>
    </main>
  );
}
