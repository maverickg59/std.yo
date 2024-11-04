import { useEffect } from "react";
import { supabase } from "../utils";
import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { SidebarNavigation, HeaderNavigation, Features } from "../components";
import { Outlet, useLocation } from "react-router-dom";
import { useStore } from "../stores";

function App() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const location = useLocation();
  const {
    setQuizzes,
    setQuizNavigation,
    setFlashcards,
    setFlashcardNavigation,
  } = useStore();

  useEffect(() => {
    async function fetchData() {
      const { data: quizData } = await supabase
        .from("quiz")
        .select(`*, quiz_question (*, quiz_question_choice (*))`);

      const { data: flashcardData } = await supabase
        .from("flashcard_pack")
        .select(`*, flashcard_pack_content (*)`);

      if (flashcardData) {
        const categorizedFlashcards = flashcardData.reduce(
          (
            acc,
            { flashcard_pack_id, flashcard_pack_category, flashcard_pack_name }
          ) => {
            if (!acc[flashcard_pack_category]) {
              acc[flashcard_pack_category] = {
                category_name: flashcard_pack_category,
                content: [],
              };
            }
            acc[flashcard_pack_category].content.push({
              content_id: flashcard_pack_id,
              content_name: flashcard_pack_name,
            });
            return acc;
          },
          {}
        );
        setFlashcardNavigation(categorizedFlashcards);
        setFlashcards(flashcardData);
      }
      if (quizData) {
        const categorizedQuizzes = quizData.reduce(
          (acc, { quiz_id, quiz_category, quiz_name }) => {
            if (!acc[quiz_category]) {
              acc[quiz_category] = {
                category_name: quiz_category,
                content: [],
              };
            }
            acc[quiz_category].content.push({
              content_id: quiz_id,
              content_name: quiz_name,
            });
            return acc;
          },
          {}
        );
        setQuizNavigation(categorizedQuizzes);
        setQuizzes(quizData);
      }
    }
    fetchData();
  }, [setQuizzes, setQuizNavigation, setFlashcards, setFlashcardNavigation]);

  return (
    <Flex direction="column" minH="100vh">
      <HeaderNavigation />
      <Flex as="section" flex="1">
        {isDesktop && <SidebarNavigation />}
        {location.pathname === "/" ? <Features /> : <Outlet />}
      </Flex>
    </Flex>
  );
}

export default App;
