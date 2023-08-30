'use client';

import { useState, useEffect } from 'react';

interface IPagination {
  changePagination: (newPage: number) => void;
}

export const Pagination = ({ changePagination }: IPagination) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    changePagination(page);
  }, [changePagination, page]);

  const lengthPagination = Array.from(Array(5).keys());

  const middlePagination = Math.floor(lengthPagination.length / 2);

  const paginationStart =
    (page > 0 && page <= middlePagination && 1) ||
    (page > middlePagination && page <= 498 && page - middlePagination) ||
    (page === 499 && page - 3) ||
    (page === 500 && page - 4) ||
    1;

  return (
    <div className="flex justify-center items-center gap-6">
      <button value={1} onClick={(e) => setPage(1)}>
        Primeiro
      </button>
      {lengthPagination.map((item) => (
        <button
          key={item}
          value={paginationStart + item}
          onClick={(e) => setPage(+e.currentTarget.value)}
        >
          {paginationStart + item}
        </button>
      ))}
      <button value={500} onClick={(e) => setPage(+e.currentTarget.value)}>
        Último
      </button>
    </div>
  );
};
