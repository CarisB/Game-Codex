import {
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/img-url";

function GenreList() {
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
              <Text fontSize="large">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Skeleton>
  );
}

export default GenreList;
