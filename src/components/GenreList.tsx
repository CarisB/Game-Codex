import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
} from "@chakra-ui/react";
import useGameQueryStore from "../gameQueryStore";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/img-url";

function GenreList() {
  const genre_id = useGameQueryStore((s) => s.gameQuery.genre_id);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const { data: genres, isLoading, error } = useGenres();

  const isMatch = (genreId: number | null): boolean => {
    return genreId === genre_id;
  };

  if (error) return null;

  return (
    <Skeleton height="100%" isLoaded={!isLoading}>
      <List>
        {genres?.results.map((genre) => (
          <ListItem key={genre.id}>
            <HStack
              paddingY={2}
              borderRadius={10}
              objectFit="cover"
              background={isMatch(genre.id) ? "green.100" : "none"}
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
                  genre.id === genre_id
                    ? setGenreId(null)
                    : setGenreId(genre.id)
                }
                variant="link"
                fontSize="large"
                whiteSpace="normal"
                textAlign="left"
                textColor={isMatch(genre.id) ? "gray.800" : "currentcolor"}
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
