import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";

interface Props {
  onSearch: (search: string) => void;
}

function NavBar({ onSearch }: Props) {
  return (
    <HStack spacing={10}>
      <Image src={logo} boxSize="60px" />
      <SearchBar onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
