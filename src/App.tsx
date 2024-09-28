import { Flex, Stack, useColorMode } from "@chakra-ui/react";
import { FiSun, FiMoon } from "react-icons/fi";
import { Quiz, NavigationLayout } from "./components";
import { useQuizStore } from "./stores";

function App() {
  const { resetQuizData, quizData, setChosenAnswer } = useQuizStore();
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightMode = colorMode === "light";
  return (
    <Flex as="section" minH="100vh">
      <NavigationLayout />
      <Quiz
        data={quizData}
        setChosenAnswer={setChosenAnswer}
        resetQuizData={resetQuizData}
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
