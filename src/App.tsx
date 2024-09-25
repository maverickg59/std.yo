import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Quiz, SidebarNavigation, MobileNavigation } from "./components";
import { linuxCommandsQuiz } from "./data";
// import { useQuizStore } from "./stores";

function App() {
  const isSmallViewport = useMediaQuery("only screen and (max-width : 768px)");
  const isMediumViewport = useMediaQuery("only screen and (min-width : 769px)");
  const [questionNum, setQuestionNum] = useState(0);
  // const { scores } = useQuizStore();

  return (
    <Flex as="section" minH="100vh">
      {isSmallViewport && <MobileNavigation />}
      {isMediumViewport && <SidebarNavigation />}
      {/* content */}
      <Quiz
        questionNum={questionNum}
        setQuestionNum={setQuestionNum}
        data={linuxCommandsQuiz}
      />
    </Flex>
  );
}

export default App;
