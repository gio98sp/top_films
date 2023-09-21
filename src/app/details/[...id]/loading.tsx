export default function Loading() {
  return (
    <div className="max-w-screen-xl w-full m-auto mb-16 md:mb-24 px-5 sm:px-7 space-y-16 md:space-y-24">
      <h2 className="w-full h-16 bg-gray-600 animate-pulse"></h2>

      <div className="relative m-auto rounded-2xl h-[500px] animate-pulse lg:h-[700px] bg-gray-600 max-w-screen-lg w-full">
        <div className="border-2 border-black absolute animate-pulse bg-gray-600 w-[40px] h-[40px] top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rounded-full"></div>
      </div>
    </div>
  );
}

