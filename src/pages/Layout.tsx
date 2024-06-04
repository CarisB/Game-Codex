import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function Layout() {
  return (
    <Box id="main" padding={10}>
      <NavBar />
      <Box marginBottom={50}></Box>
      <Outlet />
    </Box>
  );
}

export default Layout;
