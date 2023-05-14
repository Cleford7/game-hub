import { Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { genreList, error, isLoading } = useGenre();

  return (
    <>
      {error && error !== "canceled" && <Text>{error}</Text>}
      <ul>
        {genreList.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
