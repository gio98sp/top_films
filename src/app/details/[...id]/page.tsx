import { getDetailsMoviesOrSeries } from '@/services/getTmdbApi';
import Image from 'next/image';

interface IDetailsProps {
  params: {
    id: [id: number];
  };
}

export default async function Details({ params }: IDetailsProps) {
  const [id] = params.id;

  const data = await getDetailsMoviesOrSeries(id);

  return (
    <div className="max-w-screen-xl m-auto mb-16 md:mb-24 px-5 sm:px-7 flex flex-col gap:16 md:gap-24">
      <h2 className="text-2xl text-primary bg-third p-4 text-center">{data.title || data.name}</h2>

      <div className="flex flex-wrap justify-evenly items-center gap-5 gap-y-8 md:gap-12">
        {data.poster_path && (
          <div className="relative flex flex-col max-w-screen-lg rounded-2xl shadow-2xl shadow-third text-primary border-primary">
            <Image
              className="flex flex-1 rounded-t-xl w-full"
              src={`${process.env.API_URL_IMAGES}/original${data.backdrop_path}`}
              width={500}
              height={500}
              alt="imagem do filme"
            />

            <div className="flex justify-center items-center border-2 border-primary absolute bg-black font-bold text-md w-[40px] h-[40px] top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rounded-full">
              {Number(data.vote_average).toFixed(1)}
            </div>

            <p className="border-t-2 border-t-primary p-6 w-full text-center text-lg font-bold">
              {data.title || data.name}
            </p>

            <p className="border-y-2 border-y-primary p-6 w-full text-center text-lg leading-relaxed">
              {data.overview}
            </p>

            <div className="flex gap-6 justify-between bg-black rounded-b-xl">
              {Number(data.budget) >= 0 ? (
                <div className="flex flex-col justify-center items-center p-6 text-primary font-bold">
                  <p>Orçamento</p>
                  <p>
                    {data.budget === 0
                      ? 'Não informado'
                      : data.budget.toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                          minimumFractionDigits: 2,
                        })}
                  </p>
                </div>
              ) : (
                <div className="flex flex-col justify-center items-center p-6 text-primary font-bold">
                  <p>Lançamento</p>
                  <p>{new Date(data.first_air_date).toLocaleDateString()}</p>
                </div>
              )}

              {data.revenue ? (
                <div className="flex flex-col justify-center items-center p-6 text-primary font-bold">
                  <p>Faturamento</p>
                  <p>
                    {data.revenue.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                      minimumFractionDigits: 2,
                    })}
                  </p>
                </div>
              ) : (
                <div className="flex flex-col justify-center items-center p-6 text-primary font-bold">
                  <p>Último episódio</p>
                  <p>
                    {data.last_air_date
                      ? new Date(data.last_air_date).toLocaleDateString()
                      : 'Não informado'}
                  </p>
                </div>
              )}

              {data.runtime && (
                <div className="flex flex-col justify-center items-center p-6 text-primary font-bold">
                  <p>Duração</p>
                  <p>{data.runtime + 'min'}</p>
                </div>
              )}

              {data.release_date ? (
                <div className="flex flex-col justify-center items-center p-6 text-primary font-bold">
                  <p>Lançamento</p>
                  <p>{new Date(data.release_date).toLocaleDateString()}</p>
                </div>
              ) : (
                <div className="flex flex-col justify-center items-center p-6 text-primary font-bold">
                  <p>Temporadas</p>
                  <p>{`${data.number_of_seasons} temp - ${data.number_of_episodes} eps`}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
