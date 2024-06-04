import { HStack, Image, useMediaQuery } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import useGameQueryStore from "../gameQueryStore";
import MenuDrawer from "./MenuDrawer";

function NavBar() {
  const [isMobile] = useMediaQuery("(max-width: 46em)");

  return (
    <HStack spacing={10}>
      {isMobile && <MenuDrawer />}
      {!isMobile && (
        // Resets gameQuery before sending user back to HomePage
        <Link onClick={() => (useGameQueryStore().gameQuery = {})} to="/">
          <Image src={logo} boxSize="60px" />
        </Link>
      )}
      <SearchBar />
      {!isMobile && <ColorModeSwitch />}
    </HStack>
  );
}

export default NavBar;
