import { useEffect, useState, useMemo } from "react";
import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { SidebarNavigation, HeaderNavigation, Features } from "../components";
import { Outlet, useLocation } from "react-router-dom";
import { useFetch } from "../hooks";

const FETCH_URL = import.meta.env.VITE_WORK_STUDY_URL;
const API_KEY = import.meta.env.VITE_WORK_STUDY_API_KEY;
const KV_KEY = "flashcards";

function App() {
  const [kvData, setKvData] = useState<{ value: string } | undefined>();
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const location = useLocation();

  const memoizedURL = useMemo(() => `${FETCH_URL}?key=${KV_KEY}`, []);
  const memoizedOptions = useMemo(
    () => ({
      headers: { "x-api-key": API_KEY },
    }),
    []
  );

  const { data, error, loading } = useFetch<{ value: string }>(
    memoizedURL,
    memoizedOptions
  );

  useEffect(() => {
    if (data) {
      setKvData(data);
    }
  }, [data]);

  console.log(kvData, error, loading);

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
