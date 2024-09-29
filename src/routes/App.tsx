import { Flex, Stack, useColorMode } from "@chakra-ui/react";
import { FiSun, FiMoon } from "react-icons/fi";
import { NavigationLayout } from "../components";
import { Outlet } from "react-router-dom";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightMode = colorMode === "light";
  return (
    <Flex as="section" minH="100vh">
      <NavigationLayout />
      <Outlet />
      <Stack>
        {isLightMode ? (
          <FiSun onClick={() => toggleColorMode()} />
        ) : (
          <FiMoon onClick={() => toggleColorMode()} />
        )}
      </Stack>
    </Flex>
  );
}

export default App;
