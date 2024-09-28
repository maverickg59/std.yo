import { Flex, Stack, useColorMode } from "@chakra-ui/react";
import { FiSun, FiMoon } from "react-icons/fi";
import { Quiz, NavigationLayout } from "./components";
import { linuxCommandsQuiz } from "./data";
// import { useQuizStore } from "./stores";

function App() {
  // const { scores } = useQuizStore();
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightMode = colorMode === "light";
  return (
    <Flex as="section" minH="100vh">
      <NavigationLayout />
      <Quiz
        data={linuxCommandsQuiz}
        // score={score}
      />
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
