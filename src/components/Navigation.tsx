import {
  Box,
  HStack,
  useBreakpointValue,
  useDisclosure,
  useColorMode,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerProps,
  StackDivider,
  Stack,
  Text,
  Avatar,
  Container,
} from "@chakra-ui/react";
import { ToggleButton } from "./Button";
import { QuizPanel, FlashcardPanel } from "./Panels";
import { Tabs } from "./Tabs";
import { FiSun, FiMoon } from "react-icons/fi";
import { Link } from "react-router-dom";

const ProfileStack = () => {
  return (
    <Stack spacing={5}>
      <HStack>
        <Text py={1} textStyle="sm" fontSize="md" fontWeight="medium">
          Provided with ❤️ by:
        </Text>
      </HStack>
      <HStack spacing="4">
        <Link to="https://chriswhite.rocks">
          <Avatar boxSize="10" src="/cw_rocks.png" />
        </Link>
        <Box>
          <Text textStyle="sm" fontWeight="medium">
            Chris White
          </Text>
          <Text textStyle="sm" color="fg.muted">
            <a href="mailto:chris@chriswhite.rocks">chris@chriswhite.rocks</a>
          </Text>
        </Box>
      </HStack>
    </Stack>
  );
};

const MobileDrawer = (props: Omit<DrawerProps, "children">) => {
  return (
    <Drawer placement="right" {...props}>
      <DrawerContent>
        <DrawerBody
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          mt="16"
        >
          <Stack spacing="6" align="stretch" flex="1">
            <Tabs tabs={["Quiz", "Flashcards"]}>
              <QuizPanel />
              <FlashcardPanel />
            </Tabs>
          </Stack>
          <ProfileStack />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

const MobileNavigation = () => {
  const mobileNavbar = useDisclosure();
  return (
    <>
      <ToggleButton
        onClick={mobileNavbar.onToggle}
        isOpen={mobileNavbar.isOpen}
        aria-label="Open Menu"
      />
      <MobileDrawer
        isOpen={mobileNavbar.isOpen}
        onClose={mobileNavbar.onClose}
      />
    </>
  );
};

export const SidebarNavigation = () => {
  return (
    <Stack
      maxW={{ base: "full", sm: "xs" }}
      py={{ base: "6", sm: "8" }}
      px={{ base: "4", sm: "6" }}
      bg="bg.surface"
      borderRightWidth="1px"
      justifyContent="space-between"
    >
      <Stack spacing="2">
        <Tabs tabs={["Quiz", "Flashcards"]}>
          <QuizPanel />
          <FlashcardPanel />
        </Tabs>
      </Stack>
      <Stack spacing="4" divider={<StackDivider />}>
        <Box />
        <ProfileStack />
      </Stack>
    </Stack>
  );
};

export const HeaderNavigation = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightMode = colorMode === "light";
  const isMobile = useBreakpointValue({ base: true, md: false });
  const iconSize = isMobile ? 20 : 25;
  return (
    <Box as="section">
      <Box borderBottomWidth="1px" bg="bg.surface">
        <Container maxW="100%" py="4">
          <HStack justify="space-between">
            {isMobile ? (
              <MobileNavigation />
            ) : (
              <Link to="/">
                <Avatar boxSize="10" src="/cw_rocks.png" />
              </Link>
            )}
            <HStack spacing={{ base: "2", md: "4" }}>
              <Stack>
                {isLightMode ? (
                  <FiSun size={iconSize} onClick={() => toggleColorMode()} />
                ) : (
                  <FiMoon size={iconSize} onClick={() => toggleColorMode()} />
                )}
              </Stack>
            </HStack>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};
