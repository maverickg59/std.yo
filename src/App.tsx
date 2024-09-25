import "./App.css";
import {
  Avatar,
  Box,
  Flex,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  StackDivider,
  Text,
  Container,
} from "@chakra-ui/react";
import {
  FiBookmark,
  FiClock,
  FiGrid,
  FiHelpCircle,
  FiMoreVertical,
  FiPieChart,
  FiSearch,
  FiSettings,
  // FiSun,
  // FiMoon,
} from "react-icons/fi";
import { RadioCard, RadioCardGroup } from "./components/RadioCardGroup";
import { DocumentCollapse } from "./components/DocumentCollapse";
import { SidebarButton } from "./components/SideBarButtons";

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
          <InputGroup>
            <InputLeftElement>
              <Icon as={FiSearch} color="fg.muted" fontSize="lg" />
            </InputLeftElement>
            <Input placeholder="Search" />
          </InputGroup>
          <Stack spacing="1">
            <SidebarButton leftIcon={<FiGrid />}>Dashboard</SidebarButton>
            <SidebarButton leftIcon={<FiPieChart />}>Analysis</SidebarButton>
            <DocumentCollapse />
            <SidebarButton leftIcon={<FiClock />}>History</SidebarButton>
            <SidebarButton leftIcon={<FiBookmark />}>Favorites</SidebarButton>
          </Stack>
        </Stack>
        <Stack spacing="4" divider={<StackDivider />}>
          <Box />
          <Stack spacing="1">
            <SidebarButton leftIcon={<FiHelpCircle />}>
              Help Center
            </SidebarButton>
            <SidebarButton leftIcon={<FiSettings />}>Settings</SidebarButton>
          </Stack>
          <HStack spacing="3" justify="space-between">
            <HStack spacing="3">
              <Avatar boxSize="10" src="https://i.pravatar.cc/300" />
              <Box>
                <Text textStyle="sm" fontWeight="medium">
                  John Doe
                </Text>
                <Text textStyle="sm" color="fg.muted">
                  john@chakra-ui.com
                </Text>
              </Box>
            </HStack>
            <IconButton
              variant="tertiary"
              icon={<FiMoreVertical />}
              aria-label="Open Menu"
            />
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
