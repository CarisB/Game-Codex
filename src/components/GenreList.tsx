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
  genreFilter: Genre | null;
  onSelectGenre: (genre: Genre | null) => void;
}

function GenreList({ genreFilter, onSelectGenre }: Props) {
  const { data: genres, isLoading, error } = useGenres();

  const isMatch = (genre: Genre): boolean => {
    return genre.id === genreFilter?.id;
  };

  if (error) return null;

  return (
    <Skeleton height="100%" isLoaded={!isLoading}>
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id}>
            <HStack
              padding={2}
              borderRadius={10}
              objectFit="cover"
              background={isMatch(genre) ? "green.100" : "none"}
            >
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="3em"
                borderRadius={8}
                marginX={2}
              />
              <Button
                onClick={() =>
                  // Resets genre filter if same genre is selected twice
                  genre === genreFilter
                    ? onSelectGenre(null)
                    : onSelectGenre(genre)
                }
                variant="link"
                fontSize="large"
                whiteSpace="normal"
                textAlign="left"
                textColor={isMatch(genre) ? "gray.800" : "currentcolor"}
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
