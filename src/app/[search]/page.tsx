import { Cards } from "@/components/Cards/Cards";

interface ISearchProps {
  params: {
    search: string;
  };
}

export default function Search({ params }: ISearchProps) {
  const search = params.search

  return (
    <Cards category="search" query={search} />
  )
}