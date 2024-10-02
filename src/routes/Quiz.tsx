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
import { RadioCard, RadioCardGroup, Pagination } from "../components";
import { useQuizStore } from "../stores";
import { useParams } from "react-router-dom";
import { quizzes } from "../data";

function Quiz() {
  const [reveal, setReveal] = useState(false);
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
  } = useQuizStore();
  const { colorMode } = useColorMode();

  const value =
    (answers[Number(quiz_id)] && answers[Number(quiz_id)][page]) || undefined;

  useEffect(() => {
    const quiz = quizzes.find((quiz) => quiz.quiz_id === Number(quiz_id));
    if (quiz) {
      setQuiz(quiz);
    }
  }, [quiz_id, setQuiz, setPage]);

  useEffect(() => {
    setReveal(false);
  }, [page]);

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

  type RCGQProps = {
    page: number;
    questions: Question[];
    value: string | undefined;
  };

  const RadioCardGroupQuestion = ({ page, questions, value }: RCGQProps) => {
    const questionComponents = questions.map(
      ({ question, questionId, choices, correctAnswer }, i) => (
        <>
          <Stack>
            <Text textStyle="md" fontWeight="medium">
              Question {i + 1}:
            </Text>
            <Text textStyle="md" color="fg.muted">
              {question}
            </Text>
          </Stack>
          <RadioCardGroup
            key={question}
            value={value}
            name={question}
            spacing="8"
            onChange={(e) =>
              handleRadioSelection(
                e,
                Number(quiz_id),
                questionId,
                correctAnswer
              )
            }
          >
            {Object.entries(choices).map(([key, value]) => (
              <RadioCard
                key={value}
                value={key}
                isCorrect={key === correctAnswer}
              >
                <Text color="fg.emphasized" fontWeight="medium" fontSize="sm">
                  Option {key}
                </Text>
                <Text color="fg.muted" textStyle="sm">
                  {value}
                </Text>
              </RadioCard>
            ))}
          </RadioCardGroup>
        </>
      )
    );
    return questionComponents[page - 1];
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
              value={value}
            />
            <Pagination
              count={questions.length}
              pageSize={1}
              siblingCount={1}
              page={page}
              onPageChange={(e) => setPage(e.page)}
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
