import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../gameQueryStore";

function PlatformFilter() {
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);

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
              setPlatformId(platform.id);
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
