import { Stack, TabPanel } from "@chakra-ui/react";
import { FaLinux, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { Collapse } from "./Collapse";
import { useQuizStore } from "../stores";

const collapseData = (name: string, quizzes: QuizData[]) => {
  switch (name) {
    case "javascript":
      return { icon: FaJsSquare, name: "JavaScript", quizzes };
    case "html":
      return { icon: FaHtml5, name: "HTML", quizzes };
    case "css":
      return { icon: FaCss3Alt, name: "CSS", quizzes };
    default:
      return { icon: FaLinux, name: "Linux", quizzes };
  }
};

export const QuizPanel = () => {
  const { quizzes } = useQuizStore();
  const Panels = () => {
    const elements = [];
    for (const [key, value] of Object.entries(quizzes)) {
      const { icon, name, quizzes } = collapseData(key, value);
      elements.push(
        <Collapse key={name} icon={icon} name={name} quizzes={quizzes} />
      );
    }
    return elements;
  };
  return (
    <TabPanel>
      <Stack spacing="1">{<Panels />}</Stack>
    </TabPanel>
  );
};

export const FlashcardPanel = () => {
  return (
    <TabPanel>
      <Stack spacing="1">
        {/* <Collapse
          icon={FaHtml5}
          name="HTML"
          quizzes={["Resumes", "Cover Letter", "Personal", "Education"]}
        />
        <Collapse
          icon={FaCss3Alt}
          name="CSS"
          quizzes={["Resumes", "Cover Letter", "Personal", "Education"]}
        />
        <Collapse
          icon={FaJsSquare}
          name="JavaScript"
          quizzes={["Resumes", "Cover Letter", "Personal", "Education"]}
        />
        <Collapse
          icon={FaLinux}
          name="Linux"
          quizzes={["Resumes", "Cover Letter", "Personal", "Education"]}
        /> */}
      </Stack>
    </TabPanel>
  );
};
