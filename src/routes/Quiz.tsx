import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Stack,
  Text,
  Container,
  Button,
  useToast,
  useColorMode,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { Pagination, RadioCardGroupQuestion } from "../components";
import { useStore } from "../stores";
import { useParams } from "react-router-dom";

function Quiz() {
  const [reveal, setReveal] = useState(false);
  const [value, setValue] = useState<string | undefined>(undefined);
  const [correctAnswer, setCorrectAnswer] = useState<string | undefined>(
    undefined
  );
  const { colorMode } = useColorMode();
  const toast = useToast();
  const { quiz_id: quiz_id_param } = useParams();

  const {
    quiz,
    quizzes,
    page,
    setQuiz,
    setPage,
    answers,
    setAnswer,
    resetAnswers,
  } = useStore();

  const { quiz_id, quiz_name, quiz_question } = quiz || {};

  useEffect(() => {
    const quiz = quizzes.find((quiz) => quiz.quiz_id === Number(quiz_id_param));
    if (quiz) {
      setQuiz(quiz);
    }
  }, [quizzes, quiz_id_param, setQuiz]);

  useEffect(() => {
    if (!quiz_question || !answers || page <= 0) return;

    const currentQuestion = quiz_question[page - 1];
    const currentQuestionId = currentQuestion?.quiz_question_id;

    if (currentQuestionId !== undefined) {
      setValue(answers[quiz_id]?.[currentQuestionId] || undefined);

      const correctChoice = currentQuestion.quiz_question_choice.find(
        (choice) => choice.is_correct
      );
      if (correctChoice) {
        setCorrectAnswer(correctChoice.choice_letter);
      }
    }
  }, [page, quiz_id, quiz_question, answers]);

  useEffect(() => {
    setReveal(false);
  }, []);

  const handleRadioSelection = (
    e: string,
    quiz_id: number,
    quiz_question_id: number
  ) => {
    setAnswer(quiz_id, quiz_question_id, e);
    const toastVariant = colorMode === "light" ? "subtle" : "solid";
    if (e === correctAnswer) {
      toast({
        title: "Great job!",
        description: "You answered that correctly!",
        status: "info",
        duration: 1000,
        isClosable: true,
        variant: toastVariant,
        icon: <FaCheckCircle />,
      });
    } else {
      return toast({
        title: "Bummer!",
        description: "You got this one wrong, but you still learned something!",
        status: "error",
        duration: 1000,
        isClosable: true,
        variant: toastVariant,
      });
    }
  };

  return (
    <Container centerContent={true} maxW="100%">
      {quiz_name && quiz_question && (
        <Box w="100%" as="section" bg="bg.surface" pt={{ base: "4", md: "8" }}>
          <Box
            bg="bg.surface"
            px={{ base: "4", md: "6" }}
            py="5"
            boxShadow="sm"
            borderRadius="lg"
          >
            <Stack spacing="6">
              <Text textStyle="lg" fontWeight="medium">
                {quiz_name}
              </Text>
              <RadioCardGroupQuestion
                page={page}
                quiz_id={quiz_id}
                questions={quiz_question}
                value={(value as string) || ""}
                correctAnswer={(correctAnswer as string) || ""}
                handleRadioSelection={handleRadioSelection}
              />
              <Pagination
                count={quiz_question ? quiz_question.length : 0}
                pageSize={1}
                siblingCount={1}
                page={page}
                onPageChange={(e: { page: number }) => setPage(e.page)}
              />
            </Stack>
          </Box>
          <Flex justifyContent="center" pt={4}>
            <Text visibility={reveal ? "visible" : "hidden"}>
              Correct Answer: {correctAnswer}
            </Text>
          </Flex>
          <Flex
            justifyContent="space-between"
            px={8}
            pt={{ base: "4", md: "0" }}
            pb={8}
          >
            <Button variant="text" onClick={() => setReveal(!reveal)}>
              Reveal Answer
            </Button>
            <Button variant="text" onClick={() => resetAnswers(quiz_id)}>
              Reset Answers
            </Button>
          </Flex>
        </Box>
      )}
    </Container>
  );
}

export default Quiz;
