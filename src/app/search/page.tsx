import { Cards } from "@/components/Cards/Cards";

interface IQueryProps {
  searchParams: {
    query: string;
    page: string;
  }
}

export default function query({ searchParams }: IQueryProps) {
  const { query, page } = searchParams;

  return (
    <Cards category="search" query={query} page={page || '1'}/>
  )
}