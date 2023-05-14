import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImg from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre: handleClick }: Props) => {
  const { data: data, error, isLoading } = useGenre();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && error !== "canceled" && <Spinner />}
      {isLoading &&
        skeletons.map((skeleton) => <GenreSkeleton key={skeleton} />)}

      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImg(genre.image_background)}
                boxSize="32px"
                borderRadius="8px"
              />
              <Button
                onClick={() => handleClick(genre)}
                fontSize="lg"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
