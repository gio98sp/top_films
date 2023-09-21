import Image from 'next/image';
import Link from 'next/link';

import { getMoviesOrSeries } from '@/services/getTmdbApi';

import { Pagination } from './PaginationCards';

interface ICardsProps {
  category: 'movie' | 'tv' | 'trending' | 'search';
  subCategory?: 'top_rated' | 'popular';
  query?: string;
  page: string;
}

export const Cards = async ({ category, subCategory, query, page }: ICardsProps) => {
  const data = await getMoviesOrSeries({ category, subCategory, query, page });
  console.log(data)

  return (
    <>
    {data.total_results ? (
      <div className="flex flex-col gap-16 md:gap-24">
      <div className="flex flex-wrap justify-evenly items-center gap-5 gap-y-8 md:gap-12">
        {data.results.map(
          (item: any, index: number) =>
            item.poster_path &&
            index < 18 && (
              <Link href={`/details/${item.id}`} key={item.id}>
                <div className="relative flex flex-col text-primary border-primary w-[160px] rounded-2xl cursor-pointer shadow-xl shadow-third">
                  <Image
                    className="max-h-[220px] rounded-t-xl"
                    src={`${process.env.NEXT_PUBLIC_API_URL_IMAGES}/w500${item.poster_path}`}
                    priority
                    width={500}
                    height={500}
                    alt="imagem do filme"
                  />

                  <div className="flex justify-center items-center border-2 border-primary absolute bg-black font-bold text-md w-[40px] h-[40px] top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rounded-full">
                    {item.vote_average.toFixed(1)}
                  </div>

                  <p className="border-t-2 border-t-primary p-1 min-h-[80px] w-full text-center overflow-hidden text-ellipsis leading-tight">
                    {item.title || item.name}
                  </p>

                  <p className="flex justify-center items-center rounded-b-xl text-black bg-primary border-t-2 border-t-primary font-bold min-h-[30px]">
                    {new Date(item.release_date || item.first_air_date).toLocaleDateString('pt-BR')}
                  </p>
                </div>
              </Link>
            )
        )}
      </div>

      <Pagination currentPage={page} totalPages={data?.total_pages} />
    </div>
    ) : (
      <div className='h-60 text-2xl text-primary flex justify-center items-center'>Nada encontrado...</div>
    )}
    </>
  );
};
