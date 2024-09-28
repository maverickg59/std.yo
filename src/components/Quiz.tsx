import { useState } from "react";
import { Box, Stack, Text, Container } from "@chakra-ui/react";
import { RadioCard, RadioCardGroup } from "./RadioCardGroup";
import { Pagination } from "./Pagination";

type Props = {
  data: Data;
};

function getPageItem(page: number, arr: Question[]): Question {
  return arr[page - 1];
}

export function Quiz({ data }: Props) {
  const { quiz_name, questions } = data;
  const [questionNum, setQuestionNum] = useState(1);
  const { question, choices } = getPageItem(questionNum, questions);

  return (
    <Container centerContent={true} maxW="100%">
      <Box w="100%" as="section" bg="bg.surface" py={{ base: "4", md: "8" }}>
        <Text textStyle="lg" fontWeight="medium">
          {quiz_name}
        </Text>
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
          {Object.entries(choices).map(([key, value]) => (
            <RadioCard key={`${key}${value}`} value={value}>
              <Text color="fg.emphasized" fontWeight="medium" fontSize="sm">
                Option {key}
              </Text>
              <Text color="fg.muted" textStyle="sm">
                {value}
              </Text>
            </RadioCard>
          ))}
        </RadioCardGroup>
        {/* array is 0-9, page is 1-10 */}
        <Pagination
          count={questions.length}
          pageSize={1}
          siblingCount={1}
          page={questionNum}
          onPageChange={(e) => setQuestionNum(e.page)}
        />
      </Box>
    </Container>
  );
}
