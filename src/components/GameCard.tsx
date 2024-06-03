import { Card, CardBody, Flex, Heading, Image } from "@chakra-ui/react";
import Game from "../entities/Game";
import getCroppedImageUrl from "../services/img-url";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Link to={`/games/${game.slug}`}>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <Flex justifyContent="space-between" marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </Flex>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
        </CardBody>
      </Card>
    </Link>
  );
}

export default GameCard;
