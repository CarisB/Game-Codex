import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";

function NavBar() {
  return (
    <HStack spacing={10}>
      <Image src={logo} boxSize="60px" />
      <SearchBar />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
