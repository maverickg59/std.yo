import { Container, Heading, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function ErrorRoute() {
  return (
    <Container maxW="md" py={{ base: "12", md: "24" }}>
      <Stack spacing={8} textAlign="center">
        <Heading size={{ base: "xs", md: "sm" }}>
          Oops, an error occured.
        </Heading>
        <Text color="fg.muted">404: Page Not Found</Text>
        <Link to="/">Return to Home</Link>
      </Stack>
    </Container>
  );
}

export default ErrorRoute;
