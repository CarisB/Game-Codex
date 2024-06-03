import {
  Badge,
  Button,
  HStack,
  SimpleGrid,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { IoReloadCircle } from "react-icons/io5";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

function GameGrid() {
  const {
    data: games,
    error,
    isLoading,
    hasNextPage,
    fetchNextPage,
    refetch,
  } = useGames(); // Custom data fetching hook

  // Number of games fetched thus far -- necessary for InfiniteScroll
  const fetchedGamesCount =
    games?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;

  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error)
    return (
      error && (
        <VStack>
          <Badge fontSize={"1.2em"} colorScheme="red" marginBottom={10}>
            {error.message}
          </Badge>
          <HStack as={Button} onClick={() => refetch()}>
            <IoReloadCircle size={"3em"} />
            <Text>Try Again</Text>
          </HStack>
        </VStack>
      )
    );

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4, "2xl": 5 }} gap={3}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {games?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard key={game.id} game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
}

export default GameGrid;
