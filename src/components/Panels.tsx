import { Stack, TabPanel } from "@chakra-ui/react";
import { Collapse } from "./Collapse";
import { useStore } from "../stores";
import { FaLinux, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { RiCriminalLine } from "react-icons/ri";
import { FaGlasses } from "react-icons/fa6";
import { PiShareNetworkLight } from "react-icons/pi";

const iconMap = {
  linux: FaLinux,
  html: FaHtml5,
  css: FaCss3Alt,
  javascript: FaJsSquare,
  threat: RiCriminalLine,
  networking: PiShareNetworkLight,
  default: FaGlasses,
};

const icon = (key: string) => {
  return iconMap[key as keyof typeof iconMap] || iconMap.default;
};

export const QuizPanel = () => {
  const { quiz_navigation } = useStore();

  return (
    <TabPanel p={0}>
      <Stack spacing="1">
        {Object.values(quiz_navigation).map(({ category_name, content }) => {
          return (
            <Collapse
              key={category_name}
              name={category_name}
              content={content}
              urlBasePath="quiz"
              icon={icon(category_name.toLowerCase())}
            />
          );
        })}
      </Stack>
    </TabPanel>
  );
};

export const FlashcardPanel = () => {
  const { flashcard_navigation } = useStore();
  return (
    <TabPanel p={0}>
      <Stack spacing="1">
        {Object.values(flashcard_navigation).map(
          ({ category_name, content }) => {
            return (
              <Collapse
                key={category_name}
                name={category_name}
                content={content}
                urlBasePath="flashcards"
                icon={icon(category_name.toLowerCase())}
              />
            );
          }
        )}
      </Stack>
    </TabPanel>
  );
};
