import { Card, HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <>
      <HStack padding={1}>
        <Skeleton width="32px" height="32px" />
        <Skeleton width="100px" height="18px" />
      </HStack>
    </>
  );
};

export default GenreSkeleton;
