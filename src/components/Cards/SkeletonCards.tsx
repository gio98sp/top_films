export const SkeletonCards = () => {
  return (
    <div className="flex flex-col gap-24 md:gap-24">
      <div className="flex flex-wrap justify-evenly items-center gap-5 gap-y-8 md:gap-12">
        {[...Array(18)].map((_, index) => (
          <div key={index} className="relative flex flex-col bg-gray-600 w-[160px] rounded-2xl">
            <div className="h-[220px] w-[160px] rounded-t-xl" />

            <div className="border-2 absolute border-black bg-gray-600 w-[40px] h-[40px] top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rounded-full"></div>

            <p className="border-t-2 border-t-black p-1 min-h-[80px] w-full"></p>

            <p className="rounded-b-xl bg-gray-600 border-t-2 border-t-black font-bold min-h-[30px]"></p>
          </div>
        ))}
      </div>

      <div className="m-auto">
        <div className="h-7 w-80 rounded-2xl bg-gray-600"></div>
      </div>
    </div>
  );
};
