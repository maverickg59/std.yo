import { useEffect } from "react";
import { Flex, useBreakpointValue, Text } from "@chakra-ui/react";
import { SidebarNavigation, HeaderNavigation, Features } from "../components";
import { Outlet, useLocation } from "react-router-dom";
import { useStore } from "../stores";

function App() {
  const dev = import.meta.env.MODE === "development";
  const endpoint = dev
    ? import.meta.env.VITE_DEV_STUDY_ENDPOINT_URL
    : import.meta.env.VITE_STUDY_ENDPOINT_URL;
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const location = useLocation();
  const {
    setQuizzes,
    setQuizNavigation,
    setFlashcards,
    setFlashcardNavigation,
  } = useStore();

  async function fetchData(endpoint: string, path: string) {
    const response = await fetch(`${endpoint}${path}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    return await response.json();
  }

  useEffect(() => {
    async function getAppData() {
      const quizData = await fetchData(endpoint, "/api/quizzes");
      const flashcardData = await fetchData(endpoint, "/api/flashcards");
      if (quizData) {
        setQuizNavigation(quizData.quiz_navigation_data);
        setQuizzes(quizData.quiz_data);
      }
      if (flashcardData) {
        setFlashcardNavigation(flashcardData.flashcard_pack_navigation_data);
        setFlashcards(flashcardData.flashcard_pack_data);
      }
    }
    getAppData();
  }, [
    endpoint,
    setQuizzes,
    setQuizNavigation,
    setFlashcards,
    setFlashcardNavigation,
  ]);

  return (
    <Flex direction="column" minH="100vh">
      <HeaderNavigation />
      <Flex as="section" flex="1">
        {isDesktop && <SidebarNavigation />}
        {location.pathname === "/" ? <Features /> : <Outlet />}
      </Flex>
      <Flex
        borderTop="solid"
        borderColor="gray.800"
        bg="bg.surface"
        as="footer"
        py="4"
        justify="center"
        align="center"
      >
        <Text fontSize="sm" color="gray.500">
          © {new Date().getFullYear()} Chris White Rocks. All rights reserved.
        </Text>
      </Flex>
    </Flex>
  );
}

export default App;
