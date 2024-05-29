import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  marginBottom?: number;
}

function PlatformFilter({ marginBottom }: Props) {
  const { data: platforms, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
        marginBottom={marginBottom}
      >
        Filter by Platform
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformFilter;
