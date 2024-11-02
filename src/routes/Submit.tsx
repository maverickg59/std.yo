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
import { object, string, boolean, array, assert } from "superstruct";
import { useState } from "react";
import { useStore } from "../stores";
import { supabase } from "../utils";

const NewQuizSubmissionSchema = object({
  quiz_name: string(),
  quiz_category: string(),
  quiz_question: array(
    object({
      quiz_question: string(),
      quiz_question_choice: array(
        object({
          choice_letter: string(),
          choice_text: string(),
          is_correct: boolean(),
        })
      ),
    })
  ),
});

const Submit = () => {
  const [uploadType, setUploadType] = useState("quiz");
  const {
    new_quiz_submission: { quiz_string, quiz_error, json_quiz },
    setQuizString,
    setQuizError,
    setNewQuizSubmission,
  } = useStore();

  const submitQuiz = async (quiz: NewQuizSubmission) => {
    const { data, error } = await supabase.rpc("insert_quiz", {
      quiz,
    });
    return { data, error };
  };

  const handleSubmit = async () => {
    const { data, error } = await submitQuiz(json_quiz as NewQuizSubmission);
    if (error) {
      console.error("Error submitting quiz:", error);
    } else {
      console.log("Quiz submitted successfully:", data);
    }
  };

  const isValid = (value: string) => {
    const parsed = JSON.parse(value);
    assert(parsed, NewQuizSubmissionSchema);
    if (parsed === null || typeof parsed !== "object") {
      return false;
    } else {
      return true;
    }
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    if (text.length === 0) {
      setNewQuizSubmission({} as NewQuizSubmission);
    }
    setQuizString(text);
    setQuizError("");
    try {
      if (isValid(text)) {
        setNewQuizSubmission(JSON.parse(text));
      }
    } catch (e: unknown) {
      if (e instanceof Error && text.length > 0) {
        setQuizError(e.message);
      }
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
          <Textarea
            value={quiz_string}
            onChange={(e) => handleTextAreaChange(e)}
            placeholder="Place your quiz object here"
            size="md"
            height="50vh"
            resize="both"
          />
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
