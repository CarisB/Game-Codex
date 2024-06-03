import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <Box padding={10}>
      <NavBar />
      <Box marginBottom={50}></Box>
      <Outlet />
    </Box>
  );
}

export default Layout;
