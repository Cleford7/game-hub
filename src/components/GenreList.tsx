import { HStack, Image, List, ListItem, Text, VStack } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImg from "../services/image-url";

const GenreList = () => {
  const { data: data, error, isLoading } = useGenre();

  return (
    <>
      {error && error !== "canceled" && <Text>{error}</Text>}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImg(genre.image_background)}
                boxSize="32px"
                borderRadius="8px"
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
