import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../gameQueryStore";

function SortSelector() {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "name", label: "Name" },
    { value: "-rating", label: "Steam Rating" },
    { value: "-metacritic", label: "Metacritic Rating" },
    { value: "released", label: "Release Date" },
    { value: "added", label: "Date Added" },
  ];

  const sort_order = useGameQueryStore((s) => s.gameQuery.sort_order);
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);

  const orderBy = sortOrders.find((order) => order.value === sort_order);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {orderBy?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sort) => (
          <MenuItem
            key={sort.value}
            value={sort.value}
            onClick={() => setSortOrder(sort.value)}
          >
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
