import { ICardsProps } from '@/types/Cards';

export const TitleCards = ({ category, subCategory }: ICardsProps) => {

  let title

  if(subCategory === 'popular' && category === 'movie') {
    title = 'Filmes mais populares'
  }
  if(subCategory === 'popular' && category === 'tv') {
    title = 'Séries mais populares'
  }
  if(subCategory === 'top_rated' && category === 'movie') {
    title = 'Filmes melhores Avaliados'
  }
  if(subCategory === 'top_rated' && category === 'tv') {
    title = 'Séries melhores Avaliados'
  }

  return <h2 className="text-2xl text-primary bg-third p-4 text-center">{title}</h2>;
};
