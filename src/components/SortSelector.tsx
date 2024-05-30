import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  sort: string;
  onSortSelected: (sort: string) => void;
}

function SortSelector({ sort, onSortSelected }: Props) {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "name", label: "Name" },
    { value: "-rating", label: "Steam Rating" },
    { value: "-metacritic", label: "Metacritic Rating" },
    { value: "released", label: "Release Date" },
    { value: "added", label: "Date Added" },
  ];

  const orderBy = sortOrders.find((order) => order.value === sort);

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
            onClick={() => onSortSelected(sort.value)}
          >
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
