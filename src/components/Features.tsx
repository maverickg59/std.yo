import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  SimpleGrid,
  Square,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { appFeatures } from "../data";

export const Features = () => (
  <Box as="section" bg="bg.surface">
    <Container padding={{ base: "8", md: "10" }}>
      <Stack spacing={{ base: "12", md: "16" }}>
        <Stack spacing={{ base: "4", md: "5" }} maxW="3xl">
          <Stack spacing="3">
            <Text
              fontSize={{ base: "sm", md: "md" }}
              fontWeight="semibold"
              color="accent"
            >
              Welcome to Std.yo
            </Text>
            <Heading size={{ base: "sm", md: "md" }}>
              This app uses ChatGPT generated content to assist with learning
            </Heading>
          </Stack>
          <Text color="fg.muted" fontSize={{ base: "lg", md: "xl" }}>
            Most commercially available study apps are weighty and flush with
            ads or premium content. This app cuts the crap and allows me to
            quickly generate and deploy quiz or flashcard content that is
            accessible anywhere I have an internet connection.
          </Text>
        </Stack>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          columnGap={8}
          rowGap={{ base: 10, md: 16 }}
        >
          {appFeatures.map((feature) => (
            <Stack key={feature.name} spacing={{ base: "4", md: "5" }}>
              <Square
                size={{ base: "10", md: "12" }}
                bg="accent"
                color="fg.inverted"
                borderRadius="lg"
              >
                <Icon as={feature.icon} boxSize={{ base: "5", md: "6" }} />
              </Square>
              <Stack spacing={{ base: "1", md: "2" }} flex="1">
                <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="medium">
                  {feature.name}
                </Text>
                <Text color="fg.muted">{feature.description}</Text>
              </Stack>
              {feature.linksInternally ? (
                <Button
                  as={Link}
                  to={feature.href}
                  variant="link"
                  colorScheme="teal"
                  rightIcon={<FiArrowRight />}
                  alignSelf="start"
                >
                  {feature.linkName}
                </Button>
              ) : (
                <Button
                  as="a"
                  href={feature.href}
                  variant="link"
                  colorScheme="teal"
                  rightIcon={<FiArrowRight />}
                  alignSelf="start"
                >
                  {feature.linkName}
                </Button>
              )}
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  </Box>
);
