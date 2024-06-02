import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import { useState } from "react";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
}

function PlatformFilter({ onSelectPlatform }: Props) {
  const { data: platforms, error } = usePlatforms();
  const [platformName, setPlatformName] = useState("Filter by Platform");

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platformName}
      </MenuButton>
      <MenuList>
        {platforms?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => {
              setPlatformName(platform.name);
              onSelectPlatform(platform);
            }}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformFilter;
