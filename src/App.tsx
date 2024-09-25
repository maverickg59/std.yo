import "./App.css";
import {
  Avatar,
  Box,
  Flex,
  HStack,
  Stack,
  StackDivider,
  Text,
  Container,
  TabPanel,
} from "@chakra-ui/react";
import { FaLinux, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { Collapse, RadioCard, RadioCardGroup, Tabs } from "./components";

const QuizPanel = () => {
  return (
    <TabPanel>
      <Stack spacing="1">
        <Collapse
          icon={FaLinux}
          name="Linux"
          quizzes={["Resumes", "Cover Letter", "Personal", "Education"]}
        />
        <Collapse
          icon={FaHtml5}
          name="HTML"
          quizzes={["Resumes", "Cover Letter", "Personal", "Education"]}
        />
        <Collapse
          icon={FaCss3Alt}
          name="CSS"
          quizzes={["Resumes", "Cover Letter", "Personal", "Education"]}
        />
        <Collapse
          icon={FaJsSquare}
          name="JavaScript"
          quizzes={["Resumes", "Cover Letter", "Personal", "Education"]}
        />
      </Stack>
    </TabPanel>
  );
};

const FlashcardsPanel = () => {
  return (
    <TabPanel>
      <Stack spacing="1">
        <Collapse
          icon={FaHtml5}
          name="HTML"
          quizzes={["Resumes", "Cover Letter", "Personal", "Education"]}
        />
        <Collapse
          icon={FaCss3Alt}
          name="CSS"
          quizzes={["Resumes", "Cover Letter", "Personal", "Education"]}
        />
        <Collapse
          icon={FaJsSquare}
          name="JavaScript"
          quizzes={["Resumes", "Cover Letter", "Personal", "Education"]}
        />
        <Collapse
          icon={FaLinux}
          name="Linux"
          quizzes={["Resumes", "Cover Letter", "Personal", "Education"]}
        />
      </Stack>
    </TabPanel>
  );
};

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
            <FlashcardsPanel />
          </Tabs>
        </Stack>
        <Stack spacing="4" divider={<StackDivider />}>
          <Box />
          <HStack spacing="3">
            <Avatar
              boxSize="10"
              src="https://chriswhite.rocks/_next/static/media/cw_rocks.e70c0e56.png"
            />
            <Box>
              <Text textStyle="sm" fontWeight="medium">
                Chris White Rocks
              </Text>
              <Text textStyle="sm" color="fg.muted">
                chris@chriswhite.rocks
              </Text>
            </Box>
          </HStack>
        </Stack>
      </Stack>
      <Stack>
        <Box as="section" bg="bg.surface" py={{ base: "4", md: "8" }}>
          <Container maxW="lg">
            <RadioCardGroup defaultValue="one" spacing="3">
              {["one", "two", "three"].map((option) => (
                <RadioCard key={option} value={option}>
                  <Text color="fg.emphasized" fontWeight="medium" fontSize="sm">
                    Option {option}
                  </Text>
                  <Text color="fg.muted" textStyle="sm">
                    Jelly biscuit muffin icing dessert powder macaroon.
                  </Text>
                </RadioCard>
              ))}
            </RadioCardGroup>
          </Container>
        </Box>
      </Stack>
    </Flex>
  );
}

export default App;
