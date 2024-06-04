import { ArrowLeftIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  HStack,
  Heading,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { BiSolidHome } from "react-icons/bi";
import { Link } from "react-router-dom";
import useGameQueryStore from "../gameQueryStore";
import ColorModeSwitch from "./ColorModeSwitch";
import GenreList from "./GenreList";

function MenuDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      <IconButton
        ref={btnRef}
        onClick={onOpen}
        icon={<HamburgerIcon />}
        aria-label="Open menu"
        variant={"outline"}
      />
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <Heading
              size={"lg"}
              marginY={5}
              marginLeft={2}
              color={"lightslategray"}
            >
              Genres
            </Heading>
            <GenreList />
          </DrawerBody>
          <DrawerFooter
            justifyContent={"space-between"}
            borderTop={"1px dotted"}
          >
            <ColorModeSwitch />
            <HStack>
              <Link onClick={() => (useGameQueryStore().gameQuery = {})} to="/">
                <IconButton
                  icon={<BiSolidHome />}
                  variant={"outline"}
                  size={"xs"}
                  aria-label="Close menu"
                />
              </Link>
              <IconButton
                icon={<ArrowLeftIcon />}
                onClick={onClose}
                variant={"outline"}
                size={"xs"}
                aria-label="Close menu"
              />
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MenuDrawer;
