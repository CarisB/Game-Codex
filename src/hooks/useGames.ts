import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

function useGames(genreFilter: Genre | null, platformFilter: Platform | null) {
  return useData<Game>(
    "/games",
    {
      params: {
        genres: genreFilter?.id,
        parent_platforms: platformFilter?.id,
      },
    },
    [genreFilter?.id, platformFilter?.id]
  );
}

export default useGames;
