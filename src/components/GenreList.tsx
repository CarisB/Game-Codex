import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  useColorModeValue,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/img-url";

interface Props {
  genreFilter: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

function GenreList({ genreFilter, onSelectGenre }: Props) {
  const { data: genres, isLoading, error } = useGenres();

  if (error) return null;

  return (
    <Skeleton height="100%" isLoaded={!isLoading}>
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id}>
            <HStack
              padding={2}
              background={genre.id === genreFilter?.id ? "green.100" : "none"}
            >
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
                whiteSpace="normal"
                textAlign="left"
                textColor={
                  genre.id === genreFilter?.id ? "gray.800" : "primary.light"
                }
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
