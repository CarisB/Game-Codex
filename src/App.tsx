import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformFilter from "./components/PlatformFilter";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import GridHeading from "./components/GridHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sort: string;
  search: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "0.25fr 1fr",
      }}
    >
      <GridItem area="nav" paddingTop={10} paddingX={10}>
        <NavBar onSearch={(search) => setGameQuery({ ...gameQuery, search })} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" padding={10} minW={"18em"}>
          <GenreList
            genreFilter={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main" padding={10}>
        <GridHeading gameQuery={gameQuery} />
        <HStack marginBottom={30}>
          <PlatformFilter
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector
            sort={gameQuery.sort}
            onSortSelected={(sort) => setGameQuery({ ...gameQuery, sort })}
          />
        </HStack>
        <GameGrid
          gameQuery={gameQuery}
          onReload={() => setGameQuery({ ...gameQuery })}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
