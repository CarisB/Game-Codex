import { Heading, Text, Wrap } from "@chakra-ui/react";
import { useState } from "react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

function GridHeading({ gameQuery }: Props) {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === gameQuery.genre_id);

  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find(
    (p) => p.id === gameQuery.platform_id
  );

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  const [search, setSearch] = useState("");

  // Sets the search text when a new search occurs from the gameQuery object
  if (gameQuery.search && gameQuery.search !== search)
    setSearch(gameQuery.search);

  return (
    <Wrap as={Heading} fontSize={"5xl"} marginBottom={10}>
      <Text>{heading}</Text>
      <Text color="blue.500" fontWeight={300} fontStyle={"italic"}>
        {gameQuery.search && ` (searching: "${search}")`}
      </Text>
    </Wrap>
  );
}

export default GridHeading;
