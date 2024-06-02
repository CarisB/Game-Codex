import { HStack, Image, useMediaQuery } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";

interface Props {
  onSearch: (search: string) => void;
}

function NavBar({ onSearch }: Props) {
  const [isMobile] = useMediaQuery("(max-width: 46em)");

  return (
    <HStack spacing={10}>
      <Image src={logo} boxSize="60px" />
      <SearchBar onSearch={onSearch} />
      {!isMobile && <ColorModeSwitch />}
    </HStack>
  );
}

export default NavBar;
