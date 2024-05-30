import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import useGames from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";

interface Props {
  genreFilter: Genre | null;
  platformFilter: Platform | null;
}

function GameGrid({ genreFilter, platformFilter }: Props) {
  const {
    data: games,
    error,
    isLoading,
  } = useGames(genreFilter, platformFilter); // Custom data fetching hook
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text color="red">{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} gap={3}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
