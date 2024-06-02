import {
  Badge,
  Button,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { IoReloadCircle } from "react-icons/io5";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
  onReload: () => void;
}

function GameGrid({ gameQuery, onReload }: Props) {
  const { data: games, error, isLoading } = useGames(gameQuery); // Custom data fetching hook
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error)
    return (
      error && (
        <VStack>
          <Badge fontSize={"1.2em"} colorScheme="red" marginBottom={10}>
            {error.message}
          </Badge>
          <HStack as={Button} onClick={onReload}>
            <IoReloadCircle size={"3em"} />
            <Text>Try Again</Text>
          </HStack>
        </VStack>
      )
    );

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={3}>
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton key={skeleton} />
          </GameCardContainer>
        ))}
      {games?.results.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard key={game.id} game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
}

export default GameGrid;
