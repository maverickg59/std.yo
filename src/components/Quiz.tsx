import { useState } from "react";
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
import { RadioCard, RadioCardGroup } from "./RadioCardGroup";
import { Pagination } from "./Pagination";

type Props = {
  data: QuizData;
  setChosenAnswer: SetChosenAnswer;
  resetQuizData: () => void;
};

const getPageItem = (page: number, arr: Question[]) => {
  return arr[page - 1];
};

export function Quiz({ data, setChosenAnswer, resetQuizData }: Props) {
  const [questionNum, setQuestionNum] = useState(1);
  const toast = useToast();
  const { quiz_name, questions } = data;
  const { question, questionId, choices, chosenAnswer, correctAnswer } =
    getPageItem(questionNum, questions);
  const questionCount = questions.length;
  const correctToast = () =>
    toast({
      title: "Great job!",
      description: "You answered that correctly!",
      status: "success",
      duration: 1000,
      isClosable: true,
    });
  const incorrectToast = () =>
    toast({
      title: "Bummer!",
      description: "You got this one wrong, but you still learned something!",
      status: "error",
      duration: 1000,
      isClosable: true,
    });
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
            <Stack>
              <Text textStyle="md" fontWeight="medium">
                Question:
              </Text>
              <Text textStyle="md" color="fg.muted">
                {question}
              </Text>
            </Stack>
            <RadioCardGroup
              defaultValue="one"
              spacing="8"
              onChange={(e) => {
                setChosenAnswer(questionId, e);
                if (e === correctAnswer) {
                  correctToast();
                } else {
                  incorrectToast();
                }
              }}
              value={chosenAnswer}
            >
              {Object.entries(choices).map(([key, value]) => (
                <RadioCard key={`${key}${value}`} defaultValue="" value={key}>
                  <Text color="fg.emphasized" fontWeight="medium" fontSize="sm">
                    Option {key}
                  </Text>
                  <Text color="fg.muted" textStyle="sm">
                    {value}
                  </Text>
                </RadioCard>
              ))}
            </RadioCardGroup>
            <Pagination
              count={questionCount}
              pageSize={1}
              siblingCount={1}
              page={questionNum}
              onPageChange={(e) => setQuestionNum(e.page)}
            />
          </Stack>
        </Box>
        <Flex>
          {chosenAnswer !== "" && chosenAnswer !== correctAnswer && (
            <Text textStyle="lg" fontWeight="">
              Correct Answer: {correctAnswer}
            </Text>
          )}
          <Spacer />
          <Button onClick={() => resetQuizData()}>Reset Quiz Data</Button>
        </Flex>
      </Box>
    </Container>
  );
}
