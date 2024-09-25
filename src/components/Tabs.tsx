import {
  Container,
  Stack,
  Tab,
  TabIndicator,
  TabList,
  Tabs as ChakraTabs,
  TabPanels,
} from "@chakra-ui/react";
import { ReactElement } from "react";

type Props = {
  tabs: string[];
  children: ReactElement[];
};

export const Tabs = ({ tabs, children }: Props) => (
  <Container py={{ base: "1", md: "3" }}>
    <Stack spacing="8">
      <ChakraTabs size={"md"} variant="indicator">
        <TabList>
          {tabs.map((tabName) => {
            return <Tab key={tabName}>{tabName}</Tab>;
          })}
        </TabList>
        <TabIndicator />
        <TabPanels>{children}</TabPanels>
      </ChakraTabs>
    </Stack>
  </Container>
);
