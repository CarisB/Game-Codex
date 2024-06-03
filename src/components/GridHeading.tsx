import { Heading, Text, Wrap } from "@chakra-ui/react";
import { useState } from "react";
import useGameQueryStore from "../gameQueryStore";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

function GridHeading() {
  const genre_id = useGameQueryStore((s) => s.gameQuery.genre_id);
  const platform_id = useGameQueryStore((s) => s.gameQuery.platform_id);
  const search_text = useGameQueryStore((s) => s.gameQuery.search_text);

  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === genre_id);
  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find((p) => p.id === platform_id);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  const [searchText, setSearchText] = useState("");

  // Sets the search text when a new search occurs from the gameQuery object
  if (search_text && search_text !== searchText) setSearchText(search_text);

  return (
    <Wrap as={Heading} fontSize={"5xl"}>
      <Text>{heading}</Text>
      <Text color="blue.500" fontWeight={300} fontStyle={"italic"}>
        {search_text && ` (searching: "${searchText}")`}
      </Text>
    </Wrap>
  );
}

export default GridHeading;
