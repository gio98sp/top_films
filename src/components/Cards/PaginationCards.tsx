'use client';

import { useState, useEffect } from 'react';

interface IPagination {
  changePagination: (newPage: number) => void;
  totalPages: number | undefined;
}

export const Pagination = ({ changePagination, totalPages }: IPagination) => {
  const [page, setPage] = useState(1);

  if(totalPages! > 500) {
    totalPages = 500
  }

  useEffect(() => {
    changePagination(page);
  }, [page]);

  const lengthPagination =
    (totalPages! < 5 && Array.from(Array(totalPages).keys())) || Array.from(Array(5).keys());

  const middlePagination = Math.floor(lengthPagination.length / 2);

  const paginationStart =
    (page > 0 && page <= middlePagination && 1) ||
    (page > middlePagination && page <= totalPages! - 2 && page - middlePagination) ||
    (page === totalPages! - 1 && page - 3) ||
    (totalPages! > 5 && page === totalPages && page - 4) ||
    1;

  return (
    <div className="m-auto">
      <div className="flex flex-wrap justify-center items-center text-sm sm:text-md bg-black text-primary font-bold rounded-2xl border-primary border-b-2">
        <button
          className="p-1 sm:py-1 sm:px-3 rounded-l-xl hover:bg-primary hover:text-black"
          value={1}
          onClick={() => setPage(1)}
        >
          Primeiro
        </button>
        {lengthPagination.map((item) => (
          <button
            key={item}
            className={`p-1 px-[0.5rem] sm:py-1 sm:px-3 border-primary ${
              page === paginationStart + item && 'bg-primary text-black'
            } hover:bg-primary hover:text-black`}
            value={paginationStart + item}
            onClick={(e) => setPage(+e.currentTarget.value)}
          >
            {paginationStart + item}
          </button>
        ))}
        <button
          className="p-1 sm:py-1 sm:px-3 rounded-r-xl hover:bg-primary hover:text-black"
          value={totalPages}
          onClick={(e) => setPage(+e.currentTarget.value)}
        >
          Último
        </button>
      </div>
    </div>
  );
};
