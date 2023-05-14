import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  const SortItems = [
    "Relevance",
    "Date Added",
    "Name",
    "Release Date",
    "Popularity",
    "Average rating",
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        {SortItems.map((item) => (
          <MenuItem key={item}>{item}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
