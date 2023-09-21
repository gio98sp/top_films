interface ITitleCardsProps {
  category: 'movie' | 'tv' | 'trending' | 'search';
  subCategory?: 'top_rated' | 'popular';
  query?: string;
}

export const TitleCards = ({ category = 'trending', subCategory, query }: ITitleCardsProps) => {
  let title;

  if (subCategory === 'popular' && category === 'movie') {
    title = 'Filmes mais populares';
  }
  if (subCategory === 'popular' && category === 'tv') {
    title = 'Séries mais populares';
  }
  if (subCategory === 'top_rated' && category === 'movie') {
    title = 'Filmes melhores Avaliados';
  }
  if (subCategory === 'top_rated' && category === 'tv') {
    title = 'Séries melhores Avaliadas';
  }
  if (category === 'trending') {
    title = 'Melhores da semana';
  }
  if (category === 'search') {
    title = query;
  }

  return (
    <h2 className="w-full m-auto text-2xl text-primary bg-third p-4 text-center">
      {title}
    </h2>
  );
};
