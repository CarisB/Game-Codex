import { Box, Container, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import GameAttributes from "../components/GameAttributes";
import useGame from "../hooks/useGame";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";
import GameDescription from "../components/GameDescription";

function GameDetailPage() {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <Container>
        <Heading marginBottom={30}>{game.name}</Heading>
        <GameDescription game={game} />
        <GameAttributes game={game} />
      </Container>
      <Container>
        <GameTrailer gameId={game.id} />
        <Box marginBottom={5} />
        <GameScreenshots gameId={game.id} />
      </Container>
    </SimpleGrid>
  );
}

export default GameDetailPage;
