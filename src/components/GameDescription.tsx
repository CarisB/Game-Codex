import { Box, Button, useBoolean, useColorModeValue } from "@chakra-ui/react";
import parse from "html-react-parser";
import { BiChevronsDown, BiChevronsUp } from "react-icons/bi";
import Game from "../entities/Game";

interface Props {
  game: Game;
}

function GameDescription({ game }: Props) {
  const [isExpanded, { toggle }] = useBoolean(false);
  const colorModeValue = useColorModeValue(
    "transparent-gradient-light",
    "transparent-gradient-dark"
  );

  const maxHeight = "20em";

  return (
    <>
      <Box
        id="gameDescription"
        maxHeight={isExpanded ? "auto" : maxHeight}
        overflow={"hidden"}
        className={isExpanded ? "" : colorModeValue}
      >
        {parse(game.description)}
      </Box>
      <Box width={"100%"} textAlign={"right"}>
        <Button
          onClick={() => toggle()}
          rightIcon={isExpanded ? <BiChevronsUp /> : <BiChevronsDown />}
          background={"none"}
          fontWeight={"normal"}
          fontStyle={"italic"}
        >
          {isExpanded ? "See less..." : "Read more..."}
        </Button>
      </Box>
    </>
  );
}

export default GameDescription;
