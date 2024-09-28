import {
  Box,
  HStack,
  useBreakpointValue,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerProps,
  StackDivider,
  Stack,
  Text,
  Avatar,
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
        <Avatar boxSize="10" src="/cw_rocks.png" />
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

const MobileDrawer = (props: Omit<DrawerProps, "children">) => {
  return (
    <Drawer placement="right" {...props}>
      <DrawerContent>
        <DrawerBody mt="16">
          <Stack spacing="6" align="stretch">
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

const SidebarNavigation = () => {
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

export const NavigationLayout = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return <>{isDesktop ? <SidebarNavigation /> : <MobileNavigation />}</>;
};
