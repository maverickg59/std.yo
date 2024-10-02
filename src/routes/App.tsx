import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { SidebarNavigation, HeaderNavigation } from "../components";
import { Outlet } from "react-router-dom";

function App() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Flex direction="column" minH="100vh">
      <HeaderNavigation />
      <Flex as="section" flex="1">
        {isDesktop && <SidebarNavigation />}
        <Outlet />
      </Flex>
    </Flex>
  );
}

export default App;
