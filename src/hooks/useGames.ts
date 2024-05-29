import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

function useGames(genreFilter: Genre | null) {
  return useData<Game>("/games", { params: { genres: genreFilter?.id } }, [
    genreFilter?.id,
  ]);
}

export default useGames;
