import {
  Box,
  Button,
  Container,
  Textarea,
  VStack,
  RadioGroup,
  Stack,
  Radio,
  Text,
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import { assert } from "superstruct";
import { useStore } from "../stores";
import { supabase } from "../utils";
import { QuizSchema } from "../validation";

const Submit = () => {
  const [lineCount, setLineCount] = useState(1);
  const [uploadType, setUploadType] = useState("quiz");
  const lineNumberRef = useRef<HTMLDivElement | null>(null);
  const {
    quiz_submission: { quiz_string, quiz_error, json_quiz },
    setQuizString,
    setQuizError,
    setQuizSubmission,
  } = useStore();

  const handleSubmit = async () => {
    const { data, error } = await supabase.rpc("insert_quiz", {
      json_quiz,
    });
    if (error) {
      console.error("Error submitting quiz:", error);
    } else {
      console.log("Quiz submitted successfully:", data);
    }
  };

  const isValidJSON = (parsed: JSON): boolean => {
    if (parsed === null || typeof parsed !== "object") {
      return false;
    } else {
      return true;
    }
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const lines = e.target.value.split("\n").length;
    const text = e.target.value;
    setLineCount(lines);
    if (text.length === 0) {
      setQuizSubmission({} as QuizSubmission);
    }
    setQuizString(text);
    setQuizError("");
    try {
      const parsed = JSON.parse(text);
      const isValidDataStructure = assert(JSON.parse(text), QuizSchema);
      if (isValidJSON(parsed) && isValidDataStructure) {
        setQuizSubmission(JSON.parse(text));
      }
    } catch (e: unknown) {
      if (e instanceof Error && text.length > 0) {
        setQuizError(e.message);
      }
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLTextAreaElement>) => {
    if (lineNumberRef.current) {
      lineNumberRef.current.scrollTop = e.currentTarget.scrollTop;
    }
  };

  return (
    <Container maxW="100%" display="flex" justifyContent="center" mt="20">
      <Box w="80%">
        <VStack spacing={6} align="left">
          <RadioGroup
            p={4}
            onChange={(e) => {
              setUploadType(e);
            }}
            value={uploadType}
          >
            <Stack spacing={10} direction="row">
              <Radio value="quiz">Quiz</Radio>
              <Radio value="flashcard">Flashcard</Radio>
            </Stack>
          </RadioGroup>
          <Box display="flex" alignItems="start" position="relative">
            <VStack
              as="div"
              zIndex={10}
              overflow="hidden"
              align="end"
              pr="4px"
              pt="8px"
              color="gray.100"
              borderRight="1px solid"
              borderColor="gray.200"
              position="absolute"
              left="0"
              height="100%"
              width="30px"
              userSelect="none"
              roundedLeft={10}
              ref={lineNumberRef}
              spacing="0"
              fontFamily="monospace"
              fontSize="sm"
            >
              {Array.from({ length: lineCount }, (_, i) => (
                <Text key={i} lineHeight="1.5">
                  {i + 1}
                </Text>
              ))}
            </VStack>
            <Textarea
              fontFamily="monospace"
              lineHeight="1.5"
              fontSize="sm"
              pl="40px"
              value={quiz_string}
              onChange={(e) => handleTextAreaChange(e)}
              onScroll={(e) => handleScroll(e)}
              placeholder="Place your quiz object here"
              height="50vh"
              resize="vertical"
            />
          </Box>
          <Text color="red.500" height="20px">
            {quiz_error}
          </Text>
          <Button onClick={handleSubmit} colorScheme="blue">
            Submit
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Submit;
