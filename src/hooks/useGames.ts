import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import useGameQueryStore from "../gameQueryStore";
import Game from "../entities/Game";

const apiClient = new APIClient<Game>("/games");

function useGames() {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre_id,
          parent_platforms: gameQuery.platform_id,
          ordering: gameQuery.sort_order,
          search: gameQuery.search_text,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
}

export default useGames;
