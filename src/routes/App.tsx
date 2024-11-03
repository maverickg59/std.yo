import { useEffect } from "react";
import { supabase } from "../utils";
import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { SidebarNavigation, HeaderNavigation, Features } from "../components";
import { Outlet, useLocation } from "react-router-dom";
import { useStore } from "../stores";

function App() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const location = useLocation();
  const { setQuizzes, setQuizNavigation } = useStore();

  useEffect(() => {
    async function fetchData() {
      const { data: quizData } = await supabase
        .from("quiz")
        .select(`*, quiz_question (*, quiz_question_choice (*))`);
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
              quiz_id: quiz_id,
              quiz_name: quiz_name,
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
  }, [setQuizzes, setQuizNavigation]);

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
