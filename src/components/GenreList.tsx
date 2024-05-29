import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/img-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

function GenreList({ onSelectGenre }: Props) {
  const { data: genres, isLoading, error } = useGenres();

  if (error) return null;

  return (
    <Skeleton height="100%" isLoaded={!isLoading}>
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id}>
            <HStack padding={2}>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="3em"
                borderRadius={8}
                marginX={2}
              />
              <Button
                onClick={() => onSelectGenre(genre)}
                variant="link"
                fontSize="large"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Skeleton>
  );
}

export default GenreList;
