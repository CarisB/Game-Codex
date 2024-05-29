import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformFilter from "./components/PlatformFilter";

function App() {
  const [genreFilter, setGenreFilter] = useState<Genre | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "0.18fr 0.82fr",
      }}
    >
      <GridItem area="nav" padding={10}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" padding={10}>
          <GenreList
            genreFilter={genreFilter}
            onSelectGenre={(genre) => setGenreFilter(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area="main" padding={10}>
        <PlatformFilter marginBottom={30} />
        <GameGrid genreFilter={genreFilter} />
      </GridItem>
    </Grid>
  );
}

export default App;
