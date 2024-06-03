import { HStack, Image, useMediaQuery } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";

function NavBar() {
  const [isMobile] = useMediaQuery("(max-width: 46em)");

  return (
    <HStack spacing={10}>
      <Image src={logo} boxSize="60px" />
      <SearchBar />
      {!isMobile && <ColorModeSwitch />}
    </HStack>
  );
}

export default NavBar;
