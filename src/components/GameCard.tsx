import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIcon from "./PlatformIcon";
import CreditScore from "./CreditScore";
import getCroppedImg from "../services/image-url";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={getCroppedImg(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIcon
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CreditScore creditScore={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
