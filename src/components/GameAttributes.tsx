import { SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Game from "../entities/Game";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";

interface Props {
  game: Game;
}

function GameAttributes({ game }: Props) {
  return (
    <SimpleGrid as="dl" columns={2}>
      <VStack align={"normal"}>
        <DefinitionItem term="Platforms">
          {game.parent_platforms?.map(({ platform }) => (
            <Text key={platform.id}>{platform.name}</Text>
          ))}
        </DefinitionItem>
        <DefinitionItem term="Genres">
          {game.genres?.map((genre) => (
            <Text key={genre.id}>{genre.name}</Text>
          ))}
        </DefinitionItem>
        <DefinitionItem term="Release Date">{game.released}</DefinitionItem>
      </VStack>
      <VStack align={"normal"}>
        <DefinitionItem term="Metascore">
          <CriticScore score={game.metacritic} />
        </DefinitionItem>
        <DefinitionItem term="Publishers">
          {game.publishers?.map((publisher) => (
            <Text key={publisher.id}>{publisher.name}</Text>
          ))}
        </DefinitionItem>
        <DefinitionItem term="Website">
          <a href={game.website} target="_blank" rel="noreferrer noopener">
            <u>{game.website}</u>
          </a>
        </DefinitionItem>
      </VStack>
    </SimpleGrid>
  );
}

export default GameAttributes;
