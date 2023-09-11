'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { ICardsProps } from '@/types/Cards';

import { getTmdbApi } from '@/services/getTmdbApi';

import { TitleCards } from './TitleCards';
import { Pagination } from './PaginationCards';
import { IgetMoviesOrSeries } from '@/types/getTmdbApi';

export const Cards = ({ category, subCategory, query }: ICardsProps) => {
  const [data, setData] = useState<IgetMoviesOrSeries>();
  const [page, setPage] = useState(1);

  const changePagination = (newPage: number) => {
    setPage(newPage);
  };

  useEffect(() => {
    getTmdbApi({ category, subCategory, query, page })
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, [category, subCategory, query, page]);


  return (
    <div className="max-w-screen-xl m-auto mb-16 md:mb-24 px-5 sm:px-7 flex flex-col gap-16 md:gap-24">
      <TitleCards category={category} subCategory={subCategory} query={query} />

      <div className="flex flex-wrap justify-evenly items-center gap-5 gap-y-8 md:gap-12">
        {data?.results.map(
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

      <Pagination changePagination={changePagination} totalPages={data?.total_pages} />
    </div>
  );
};
