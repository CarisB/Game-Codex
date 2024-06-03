import { create } from "zustand";

interface GameQuery {
  genre_id?: number | null;
  platform_id?: number | null;
  sort_order?: string;
  search_text?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number | null) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (search_text) => set(() => ({ gameQuery: { search_text } })),
  setGenreId: (genre_id) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genre_id } })),
  setPlatformId: (platform_id) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, platform_id },
    })),
  setSortOrder: (sort_order) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sort_order } })),
}));

export default useGameQueryStore;
