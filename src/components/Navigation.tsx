import {
  Avatar,
  Box,
  Container,
  HStack,
  Drawer,
  DrawerBody,
  DrawerContent,
  Stack,
  StackDivider,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { ToggleButton } from "./Button";
import { QuizPanel, FlashcardPanel } from "./Panels";
import { Tabs } from "./Tabs";

const ProfileStack = () => {
  return (
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
  );
};

const MobileDrawer = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  return (
    <>
      <ToggleButton
        isOpen={isOpen}
        onClick={onToggle}
        aria-label="Open menu"
        display={{ base: "inline-flex", lg: "none" }}
      />
      <Drawer placement="top" isOpen={isOpen} onClose={onClose}>
        <DrawerContent>
          <DrawerBody mt="56px" p="4">
            <Stack spacing="1">
              <Tabs tabs={["Quiz", "Flashcards"]}>
                <QuizPanel />
                <FlashcardPanel />
              </Tabs>
            </Stack>
            <ProfileStack />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export const MobileNavigation = () => (
  <Box as="section" minH="lg">
    <Box
      borderBottomWidth="1px"
      bg="bg.surface"
      position="relative"
      zIndex="tooltip"
    >
      <Container py="4">
        <HStack justify="space-between" spacing="8">
          <HStack spacing="10">
            <HStack spacing="3">
              <MobileDrawer />
            </HStack>
          </HStack>
        </HStack>
      </Container>
    </Box>
  </Box>
);

export const SidebarNavigation = () => {
  return (
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
        <ProfileStack />
      </Stack>
    </Stack>
  );
};
