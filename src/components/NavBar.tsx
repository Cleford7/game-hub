import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import GameSearch from "./GameSearch";

const NavBar = () => {
  return (
    <HStack padding={"10px"}>
      <Image src={logo} boxSize="60px" />
      <GameSearch />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
