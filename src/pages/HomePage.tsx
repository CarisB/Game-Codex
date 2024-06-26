import { Grid, GridItem, Show, Wrap } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";
import GridHeading from "../components/GridHeading";
import PlatformFilter from "../components/PlatformFilter";
import ScrollToTop from "../components/ScrollToTop";
import SortSelector from "../components/SortSelector";

function HomePage() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "0.15fr 1fr",
        }}
      >
        <Show above="lg">
          <GridItem area="aside" minW={250} paddingRight={10}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main" minW={0}>
          <GridHeading />
          <Wrap marginY={10}>
            <PlatformFilter />
            <SortSelector />
          </Wrap>
          <GameGrid />
        </GridItem>
      </Grid>
      <ScrollToTop />
    </>
  );
}

export default HomePage;
