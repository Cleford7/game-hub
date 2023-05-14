import { Badge } from "@chakra-ui/react";

interface Props {
  creditScore: number;
}

const CreditScore = ({ creditScore }: Props) => {
  const color = creditScore > 75 ? "green" : creditScore > 60 ? "yellow" : "";

  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="4px">
      {creditScore}
    </Badge>
  );
};

export default CreditScore;
