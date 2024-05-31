import { HStack, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

function GridHeading({ gameQuery }: Props) {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  const [search, setSearch] = useState("");

  // Sets the search text when a new search occurs from the gameQuery object
  if (gameQuery.search && gameQuery.search !== search)
    setSearch(gameQuery.search);

  return (
    <HStack as={Heading} fontSize={"5xl"} marginBottom={10}>
      <Text>{heading}</Text>
      <Text color="blue.500" fontWeight={300} fontStyle={"italic"}>
        {gameQuery.search && ` (searching: "${search}")`}
      </Text>
    </HStack>
  );
}

export default GridHeading;
