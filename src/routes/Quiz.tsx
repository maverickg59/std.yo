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
import { quizzes } from "../data";

function Quiz() {
  const [reveal, setReveal] = useState(false);
  const { colorMode } = useColorMode();
  const toast = useToast();
  const { quiz_id } = useParams();
  const {
    quiz: { quiz_name, questions },
    page,
    setQuiz,
    setPage,
    answers,
    setAnswer,
    resetAnswers,
  } = useStore();

  useEffect(() => {
    const quiz = quizzes.find((quiz) => quiz.quiz_id === Number(quiz_id));
    if (quiz) {
      setQuiz(quiz);
    }
  }, [quiz_id, setQuiz]);

  useEffect(() => {
    setReveal(false);
  }, [page]);

  const value = answers[Number(quiz_id)]?.[page] || undefined;

  const handleRadioSelection = (
    e: string,
    quiz_id: number,
    questionId: number,
    correctAnswer: string
  ) => {
    setAnswer(Number(quiz_id), questionId, e);
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
              questions={questions}
              value={value as string}
              quiz_id={quiz_id}
              handleRadioSelection={handleRadioSelection}
            />
            <Pagination
              count={questions.length}
              pageSize={1}
              siblingCount={1}
              page={page}
              onPageChange={(e: { page: number }) => setPage(e.page)}
            />
          </Stack>
        </Box>
        <Flex justifyContent="center" pt={4}>
          <Text visibility={reveal ? "visible" : "hidden"}>
            Correct Answer: {questions[page - 1].correctAnswer}
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
          <Button variant="text" onClick={() => resetAnswers(Number(quiz_id))}>
            Reset Answers
          </Button>
        </Flex>
      </Box>
    </Container>
  );
}

export default Quiz;
