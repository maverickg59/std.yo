import { ReactElement } from "react";
import {
  Container,
  Stack,
  Tab,
  TabIndicator,
  TabList,
  Tabs as ChakraTabs,
  TabPanels,
} from "@chakra-ui/react";

type Props = {
  tabs: string[];
  children: ReactElement[];
  defaultIndex?: number;
};

export const Tabs = ({ tabs, children, defaultIndex }: Props) => (
  <Container py={{ base: "1", md: "3" }}>
    <Stack spacing="8">
      <ChakraTabs
        defaultIndex={defaultIndex}
        align="center"
        size={"md"}
        variant="indicator"
      >
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
