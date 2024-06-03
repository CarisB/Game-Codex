import { Box, Heading, Spinner } from "@chakra-ui/react";
import parse from "html-react-parser";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";

function GameDetailPage() {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <div>
      <Heading marginBottom={30}>{game.name}</Heading>
      <Box
        id="gameDescription"
        width="65%"
        height={200}
        overflow={"hidden"}
        className="transparent-gradient"
      >
        {parse(game.description)}
      </Box>
    </div>
  );
}

export default GameDetailPage;
