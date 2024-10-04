import { Stack, TabPanel } from "@chakra-ui/react";
import { Collapse } from "./Collapse";
import { navPaths } from "../data";

const { quizzes, flashcards } = navPaths;

export const QuizPanel = () => {
  return (
    <TabPanel p={0}>
      <Stack spacing="1">
        {Object.values(quizzes).map(
          ({ category_name, category_icon, content }) => {
            return (
              <Collapse
                key={category_name}
                name={category_name}
                content={content}
                urlBasePath="quiz"
                icon={category_icon}
              />
            );
          }
        )}
      </Stack>
    </TabPanel>
  );
};

export const FlashcardPanel = () => {
  return (
    <TabPanel p={0}>
      <Stack spacing="1">
        {Object.values(flashcards).map(
          ({ category_name, category_icon, content }) => {
            return (
              <Collapse
                key={category_name}
                name={category_name}
                content={content}
                urlBasePath="flashcards"
                icon={category_icon}
              />
            );
          }
        )}
      </Stack>
    </TabPanel>
  );
};
