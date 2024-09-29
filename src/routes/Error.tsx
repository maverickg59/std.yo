import { Container, Heading, Stack, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function Error() {
  return (
    <Container maxW="md" py={{ base: "12", md: "24" }}>
      <Stack spacing={8} textAlign="center">
        <Heading size={{ base: "xs", md: "sm" }}>
          Oops, an error occured.
        </Heading>
        <Text color="fg.muted">404: Page Not Found</Text>
        <NavLink to="/">Return to Home</NavLink>
      </Stack>
    </Container>
  );
}

export default Error;
