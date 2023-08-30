export const Search = () => {
  return (
    <div className="flex justify-center items-center m-auto max-w-screen-lg py-16 md:py-24 gap-[2px]">
      <label htmlFor="search" hidden>
        Busque por um Filme ou Série
      </label>
      <input
        className="text-black text-lg sm:text-xl placeholder:text-black py-2 px-4 sm:px-8 w-4/5 sm:w-3/5 text-left rounded-l-full bg-secondary outline-none"
        type="text"
        name="search"
        placeholder="Busque por um Filme ou Série..."
      />

      <button className="bg-primary py-1.5 px-2 sm:px-6 rounded-r-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#000"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </div>
  );
};