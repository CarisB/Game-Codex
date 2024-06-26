import { Box, Container, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import GameAttributes from "../components/GameAttributes";
import GameDescription from "../components/GameDescription";
import GameScreenshots from "../components/GameScreenshots";
import GameTrailer from "../components/GameTrailer";
import useBackgroundImage from "../hooks/useBackgroundImage";
import useGame from "../hooks/useGame";

function GameDetailPage() {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  useBackgroundImage(game);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <Container minW={"85%"}>
        <Heading marginBottom={30}>{game.name}</Heading>
        <GameDescription game={game} />
        <GameAttributes game={game} />
      </Container>
      <Container minW={"85%"}>
        <GameTrailer gameId={game.id} />
        <Box marginBottom={5} />
        <GameScreenshots gameId={game.id} />
      </Container>
    </SimpleGrid>
  );
}

export default GameDetailPage;
