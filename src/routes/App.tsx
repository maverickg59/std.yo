import { useEffect } from "react";
import { supabase } from "../utils";
import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { SidebarNavigation, HeaderNavigation, Features } from "../components";
import { Outlet, useLocation } from "react-router-dom";

function App() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const location = useLocation();

  async function fetchData() {
    const { data: quizData } = await supabase.from("quizzes").select();
    if (quizData) {
      console.log("quiz data: ", quizData);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

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
