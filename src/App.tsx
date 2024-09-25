import "./App.css";
import {
  Avatar,
  Box,
  Flex,
  HStack,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { Tabs, QuizPanel, FlashcardPanel, Quiz } from "./components";

function App() {
  return (
    <Flex as="section" minH="100vh">
      <Stack
        flex="1"
        maxW={{ base: "full", sm: "xs" }}
        py={{ base: "6", sm: "8" }}
        px={{ base: "4", sm: "6" }}
        bg="bg.surface"
        borderRightWidth="1px"
        justifyContent="space-between"
      >
        <Stack spacing="8">
          <Tabs tabs={["Quiz", "Flashcards"]}>
            <QuizPanel />
            <FlashcardPanel />
          </Tabs>
        </Stack>
        <Stack spacing="4" divider={<StackDivider />}>
          <Box />
          <Stack spacing={5}>
            <Text py={1} textStyle="sm" fontSize="md" fontWeight="medium">
              Provided with ❤️ by:
            </Text>
            <HStack spacing="4">
              <Avatar
                boxSize="10"
                src="https://chriswhite.rocks/_next/static/media/cw_rocks.e70c0e56.png"
              />
              <Box>
                <Text textStyle="sm" fontWeight="medium">
                  Chris White
                </Text>
                <Text textStyle="sm" color="fg.muted">
                  chris@chriswhite.rocks
                </Text>
              </Box>
            </HStack>
          </Stack>
        </Stack>
      </Stack>
      <Quiz />
    </Flex>
  );
}

export default App;
