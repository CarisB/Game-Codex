import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "red";

  return (
    <Badge
      colorScheme={color}
      fontSize={14}
      paddingX={2}
      borderRadius={4}
      height="fit-content"
    >
      {score}
    </Badge>
  );
}

export default CriticScore;
