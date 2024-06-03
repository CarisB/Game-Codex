import { Box, Grid, GridItem, Show, Wrap } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import GridHeading from "./components/GridHeading";
import NavBar from "./components/NavBar";
import PlatformFilter from "./components/PlatformFilter";
import ScrollToTop from "./components/ScrollToTop";
import SortSelector from "./components/SortSelector";

function App() {
  return (
    <Box padding={10}>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "0.15fr 1fr",
        }}
      >
        <GridItem area="nav" marginBottom={10}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" minW={250} paddingRight={10}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main" minW={0}>
          <GridHeading />
          <Wrap marginBottom={30}>
            <PlatformFilter />
            <SortSelector />
          </Wrap>
          <GameGrid />
        </GridItem>
      </Grid>
      <ScrollToTop />
    </Box>
  );
}

export default App;
