import { Box, Button, Heading, Text } from "@chakra-ui/react";
import {
  Link,
  isRouteErrorResponse,
  useLocation,
  useRouteError,
} from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  const location = useLocation();

  return (
    <Box padding={100}>
      <Heading>Whoopsies!</Heading>
      <Text marginTop={2}>
        {isRouteErrorResponse(error)
          ? `The page '${location.pathname}' does not exist.`
          : `An unexpected error has occurred.`}
      </Text>
      <Button marginTop={50}>
        <Link to="/">Return to index</Link>
      </Button>
    </Box>
  );
}

export default ErrorPage;
