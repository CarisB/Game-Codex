import { HStack, Image, useMediaQuery } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

function NavBar() {
  const [isMobile] = useMediaQuery("(max-width: 46em)");

  return (
    <HStack spacing={10}>
      <Link to="/">
        <Image src={logo} boxSize="60px" />
      </Link>
      <SearchBar />
      {!isMobile && <ColorModeSwitch />}
    </HStack>
  );
}

export default NavBar;
