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
import { assert, is } from "superstruct";
import { useStore } from "../stores";
import { supabase } from "../utils";
import { QuizSchema, FlashcardPackSchema } from "../validation";

const Submit = () => {
  const [lineCount, setLineCount] = useState(1);
  const [uploadType, setUploadType] = useState("quiz");
  const isQuiz = uploadType === "quiz";
  const lineNumberRef = useRef<HTMLDivElement | null>(null);
  const {
    quiz_submission: { quiz_string, quiz_error, json_quiz },
    flashcard_submission: {
      flashcard_pack_string,
      flashcard_pack_error,
      json_flashcard_pack,
    },
    setQuizString,
    setQuizError,
    setQuizSubmission,
    setFlashcardPackString,
    setFlashcardPackError,
    setFlashcardPackSubmission,
  } = useStore();

  const handleSubmit = async () => {
    const payload = {
      quiz: { quiz: json_quiz },
      flashcard: { flashcard_pack: json_flashcard_pack },
    };
    const { data, error } = await supabase.rpc(
      `insert_${uploadType}`,
      payload[uploadType as keyof typeof payload]
    );
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
    if (isQuiz) {
      console.log("quiz");
      if (text.length === 0) {
        setQuizSubmission({} as QuizSubmission);
      }
      setQuizString(text);
      setQuizError("");
      try {
        const parsed = JSON.parse(text);
        assert(JSON.parse(text), QuizSchema);
        const isValidDataStructure = is(parsed, QuizSchema);
        if (isValidJSON(parsed) && isValidDataStructure) {
          setQuizSubmission(JSON.parse(text));
        }
      } catch (e: unknown) {
        if (e instanceof Error && text.length > 0) {
          setQuizError(e.message);
        }
      }
    } else {
      if (text.length === 0) {
        setFlashcardPackSubmission({} as FlashcardPackSubmission);
      }
      setFlashcardPackString(text);
      setFlashcardPackError("");
      try {
        const parsed = JSON.parse(text);
        assert(JSON.parse(text), FlashcardPackSchema);
        const isValidDataStructure = is(parsed, FlashcardPackSchema);
        if (isValidJSON(parsed) && isValidDataStructure) {
          setFlashcardPackSubmission(JSON.parse(text));
        }
      } catch (e: unknown) {
        if (e instanceof Error && text.length > 0) {
          setFlashcardPackError(e.message);
        }
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
              pr={2}
              pb={2}
              pt="9px"
              color="gray.100"
              borderRight="1px solid"
              borderColor="gray.200"
              position="absolute"
              left="0"
              height="100%"
              width="35px"
              userSelect="none"
              roundedLeft={10}
              ref={lineNumberRef}
              spacing="0"
              lineHeight={1.5}
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
              pt="8px"
              py={2}
              fontFamily="monospace"
              lineHeight="1.5"
              fontSize="sm"
              pl="45px"
              value={isQuiz ? quiz_string : flashcard_pack_string}
              onChange={(e) => handleTextAreaChange(e)}
              onScroll={(e) => handleScroll(e)}
              placeholder={`Place your ${
                isQuiz ? "quiz" : "flashcard pack"
              } object here`}
              height="50vh"
              resize="vertical"
            />
          </Box>
          <Text color="red.500" height="20px">
            {isQuiz ? quiz_error : flashcard_pack_error}
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
