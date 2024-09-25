import { useState, useEffect } from "react";
import { Box, Stack, Text, Container } from "@chakra-ui/react";
import { RadioCard, RadioCardGroup } from "./RadioCardGroup";
import { Pagination } from "./Pagination";
// import { useQuizStore } from "./stores";

const defaultQuizData = [
  {
    command: "No command, just kewlness.",
    question: "Oops, we can't find that quiz!",
    choices: [
      "Find a new quiz.",
      "Quit for the day.",
      "Try the flashcards feature.",
      "Choose this answer.",
    ],
    correctAnswer: "Find a new quiz",
  },
];

export function Quiz() {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  // const { scores } = useQuizStore();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data/quiz_data/linux_quiz.json"); // Adjust the path if your file is located elsewhere
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

  const quizData = (data && Object.values(data)[0]) ?? defaultQuizData;
  const question = quizData[page];

  const optionLabel = (index: number) => {
    switch (true) {
      case index === 0:
        return "A";
      case index === 1:
        return "B";
      case index === 2:
        return "C";
      default:
        return "D";
    }
  };

  return (
    <Stack>
      <Box as="section" bg="bg.surface" py={{ base: "4", md: "8" }}>
        <Container>
          <Box
            bg="bg.surface"
            px={{ base: "4", md: "6" }}
            py="5"
            boxShadow="sm"
            borderRadius="lg"
          >
            <Stack spacing="1">
              <Text textStyle="lg" fontWeight="medium">
                Question:
              </Text>
              <Text textStyle="sm" color="fg.muted">
                {question.question}
              </Text>
            </Stack>
          </Box>
        </Container>
        <Container maxW="lg">
          <RadioCardGroup defaultValue="one" spacing="3">
            {question.choices.map((option, i) => (
              <RadioCard key={option} value={option}>
                <Text color="fg.emphasized" fontWeight="medium" fontSize="sm">
                  Option {optionLabel(i)}
                </Text>
                <Text color="fg.muted" textStyle="sm">
                  {option}
                </Text>
              </RadioCard>
            ))}
          </RadioCardGroup>
        </Container>
        <Container py={{ base: "12", md: "16" }}>
          <Pagination
            count={quizData.length}
            pageSize={1}
            siblingCount={0}
            page={page}
            onPageChange={(e) => setPage(e.page)}
          />
        </Container>
      </Box>
    </Stack>
  );
}
