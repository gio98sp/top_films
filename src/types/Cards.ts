export interface ICardsProps {
  category: 'movie' | 'tv' | 'trending' | 'search';
  subCategory?: 'top_rated' | 'popular';
  query?: string
}
