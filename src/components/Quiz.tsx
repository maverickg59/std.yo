import { Dispatch, SetStateAction } from "react";
import { Box, Stack, Text, Container } from "@chakra-ui/react";
import { RadioCard, RadioCardGroup } from "./RadioCardGroup";
import { Pagination } from "./Pagination";

type Props = {
  questionNum: number;
  setQuestionNum: Dispatch<SetStateAction<number>>;
  data: Data;
};

export function Quiz({ questionNum, setQuestionNum, data }: Props) {
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

  const { command, question, choices, correctAnswer } = data[questionNum];

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
          <Stack spacing="1">
            <Text textStyle="lg" fontWeight="medium">
              Question:
            </Text>
            <Text textStyle="sm" color="fg.muted">
              {question}
            </Text>
          </Stack>
        </Box>
        <RadioCardGroup defaultValue="one" spacing="3">
          {choices.map((option, i) => (
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
        <Pagination
          count={data.length}
          pageSize={1}
          siblingCount={1}
          page={questionNum}
          onPageChange={(e) => setQuestionNum(e.page)}
        />
      </Box>
    </Container>
  );
}
