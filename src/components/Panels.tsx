import { Stack, TabPanel } from "@chakra-ui/react";
import { FaLinux, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { Collapse } from "./Collapse";

export const QuizPanel = () => {
  return (
    <TabPanel>
      <Stack spacing="1">
        <Collapse
          icon={FaLinux}
          name="Linux"
          quizzes={["Resumes", "Cover Letter", "Personal", "Education"]}
        />
        <Collapse
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
      </Stack>
    </TabPanel>
  );
};

export const FlashcardPanel = () => {
  return (
    <TabPanel>
      <Stack spacing="1">
        <Collapse
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
        />
      </Stack>
    </TabPanel>
  );
};
