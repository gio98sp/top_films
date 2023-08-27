import Image from 'next/image';

interface ICard {
  urlTMDBApi: string | undefined;
  title:
    | 'Filmes melhores avaliados'
    | 'Séries melhores avaliadas'
    | 'Filmes mais populares'
    | 'Séries mais populares';
}

export const Card = async ({ urlTMDBApi, title }: ICard) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `${process.env.TOKEN_TMDB}`,
    },
  };

  const res = await fetch(`${urlTMDBApi}`, options);
  const data = await res.json();

  const handleClick = () => {};

  return (
    <div className='max-w-screen-xl m-auto mb-16 md:mb-24 px-5 sm:px-7 flex flex-col gap:16 md:gap-24'>
      <h2 className='text-2xl text-primary bg-third p-4 text-center'>{title}</h2>
      <div className="flex flex-wrap justify-evenly items-center gap-5 gap-y-8 md:gap-12">
        {data.results.map((item: any, index: number) =>
          item.poster_path && index < 18 ? (
            <div
              key={item.id}
              className="relative flex flex-col text-primary border-primary w-[160px] rounded-2xl cursor-pointer shadow-xl shadow-third"
            >
              <Image
                className="max-h-[220px] rounded-t-xl"
                src={`${process.env.API_URL_IMAGES}/w500${item.poster_path}`}
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
                {new Date(item.release_date || item.first_air_date).toLocaleDateString()}
              </p>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};
