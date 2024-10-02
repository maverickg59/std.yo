import { useEffect } from "react";
import {
  Box,
  Flex,
  Spacer,
  Stack,
  Text,
  Container,
  Button,
  useToast,
} from "@chakra-ui/react";
import { RadioCard, RadioCardGroup, Pagination } from "../components";
import { useQuizStore } from "../stores";
import { useParams } from "react-router-dom";
import { quizzes } from "../data";

function Quiz() {
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

  const value =
    (answers[Number(quiz_id)] && answers[Number(quiz_id)][page]) || undefined;

  useEffect(() => {
    const quiz = quizzes.find((quiz) => quiz.quiz_id === Number(quiz_id));
    if (quiz) {
      setQuiz(quiz);
    }
  }, [quiz_id, setQuiz, setPage]);

  const handleRadioSelection = (
    e: string,
    quiz_id: number,
    questionId: number,
    correctAnswer: string
  ) => {
    setAnswer(Number(quiz_id), questionId, e);
    if (e === correctAnswer) {
      toast({
        title: "Great job!",
        description: "You answered that correctly!",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
    } else {
      return toast({
        title: "Bummer!",
        description: "You got this one wrong, but you still learned something!",
        status: "error",
        duration: 1000,
        isClosable: true,
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
              <RadioCard key={value} value={key}>
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
      <Box w="100%" as="section" bg="bg.surface" py={{ base: "4", md: "8" }}>
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
        <Flex>
          <Spacer />
          <Button onClick={() => resetAnswers(Number(quiz_id))}>
            Reset Answers
          </Button>
        </Flex>
      </Box>
    </Container>
  );
}

export default Quiz;
