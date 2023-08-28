'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export const Header = () => {
  const [isOverMovies, setIsOverMovies] = useState(false);
  const [isOverSeries, setIsOverSeries] = useState(false);

  return (
    <header className="p-6 md:p-8 bg-third text-primary">
      <div className="flex flex-wrap justify-between items-center m-auto gap-x-16 gap-y-6 max-w-screen-lg">
        <Link href="/">
          <div className="flex gap-6 items-center">
            <Image src="/logo.svg" alt="Logo" width={50} height={50} />
            <h1 className="text-3xl md:text-4xl">
              <strong>Top Films</strong>
            </h1>
          </div>
        </Link>
        <nav className="m-auto md:m-0">
          <ul className="flex justify-center items-center bg-third p-2 gap-2 sm:gap-8 md:gap-16">
            <li
              className="relative flex flex-col"
              onMouseEnter={() => setIsOverMovies(true)}
              onMouseLeave={() => setIsOverMovies(false)}
              onClick={() => setIsOverMovies(!isOverMovies)}
            >
              <span className="flex items-center text-lg">
                Filmes
                <Image src="/arrowDown.svg" alt="Arrow Down" width={30} height={30} />
              </span>
              {isOverMovies && (
                <div
                  className={`absolute flex flex-col bg-third px-2 py-4 sm:p-4 cursor-pointer rounded-md gap-4 top-full left-1/2 transform -translate-x-1/2 w-max border-2 border-secondary`}
                >
                  <Link href={'/'}>Melhores avaliados</Link>
                  <Link href={'/'}>Mais populares</Link>
                </div>
              )}
            </li>
            <li
              className="relative flex flex-col"
              onMouseEnter={() => setIsOverSeries(true)}
              onMouseLeave={() => setIsOverSeries(false)}
              onClick={() => setIsOverSeries(!isOverSeries)}
            >
              <span className="flex items-center text-lg">
                Séries
                <Image src="/arrowDown.svg" alt="Arrow Down" width={30} height={30} />
              </span>
              {isOverSeries && (
                <div
                  className={`absolute flex flex-col bg-third px-2 py-4 sm:p-4 cursor-pointer rounded-md gap-4 top-full left-1/2 transform -translate-x-1/2 w-max border-2 border-secondary`}
                >
                  <Link href={'/'}>Melhores avaliados</Link>
                  <Link href={'/'}>Mais populares</Link>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
