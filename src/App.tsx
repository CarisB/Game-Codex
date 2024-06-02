import { Box, Grid, GridItem, Show, Wrap } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import GridHeading from "./components/GridHeading";
import NavBar from "./components/NavBar";
import PlatformFilter from "./components/PlatformFilter";
import ScrollToTop from "./components/ScrollToTop";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre_id: number | null;
  platform_id: number | null;
  sort: string;
  search: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Box padding={10}>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "0.12fr 1fr",
        }}
      >
        <GridItem area="nav" marginBottom={10}>
          <NavBar
            onSearch={(search) => setGameQuery({ ...gameQuery, search })}
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" minW={250} paddingRight={10}>
            <GenreList
              genreFilterId={gameQuery.genre_id}
              onSelectGenre={(genreId) =>
                setGameQuery({ ...gameQuery, genre_id: genreId })
              }
            />
          </GridItem>
        </Show>
        <GridItem area="main" minW={0}>
          <GridHeading gameQuery={gameQuery} />
          <Wrap marginBottom={30}>
            <PlatformFilter
              onSelectPlatform={(platformId) =>
                setGameQuery({ ...gameQuery, platform_id: platformId })
              }
            />
            <SortSelector
              sort={gameQuery.sort}
              onSortSelected={(sort) => setGameQuery({ ...gameQuery, sort })}
            />
          </Wrap>
          <GameGrid
            gameQuery={gameQuery}
            onReload={() => setGameQuery({ ...gameQuery })}
          />
        </GridItem>
      </Grid>
      <ScrollToTop />
    </Box>
  );
}

export default App;
