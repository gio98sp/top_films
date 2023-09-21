'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

interface IPagination {
  currentPage: string;
  totalPages: number;
}

export const Pagination = ({ currentPage, totalPages }: IPagination) => {
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const query = searchParams.get('query');

  const [page, setPage] = useState(+currentPage);

  if (totalPages > 100) totalPages = 100;

  const lengthPagination =
    (totalPages < 5 && Array.from(Array(totalPages).keys())) || Array.from(Array(5).keys());

  const middlePagination = Math.floor(lengthPagination.length / 2);

  const paginationStart =
    (page > middlePagination && page <= totalPages - middlePagination && page - middlePagination) ||
    (page === totalPages - 1 && page - 3) ||
    (page === totalPages && page - 4) ||
    1;

  useEffect(() => {
    setPage(1)
  }, [query])

  return (
    <div className="m-auto">
      <div className="flex flex-wrap justify-center items-center text-sm sm:text-md bg-black text-primary font-bold rounded-2xl border-primary border-b-2">
        <Link
          className="p-1 sm:py-1 sm:px-3 rounded-l-xl hover:bg-primary hover:text-black"
          onClick={() => setPage(1)}
          href={`${pathName}${query ? `?query=${query}&` : '?'}page=${1}`}
        >
          Primeiro
        </Link>

        {lengthPagination.map((item) => (
          <Link
            key={item}
            onClick={() => setPage(paginationStart + item)}
            href={`${pathName}${query ? `?query=${query}&` : '?'}page=${paginationStart + item}`}
            className={`p-1 px-[0.5rem] sm:py-1 sm:px-3 border-primary ${
              page === paginationStart + item && 'bg-primary text-black'
            } hover:bg-primary hover:text-black`}
          >
            {paginationStart + item}
          </Link>
        ))}

        <Link
          className="p-1 sm:py-1 sm:px-3 rounded-r-xl hover:bg-primary hover:text-black"
          onClick={() => setPage(totalPages)}
          href={`${pathName}${query ? `?query=${query}&` : '?'}page=${totalPages}`}
        >
          Último
        </Link>
      </div>
    </div>
  );
};
