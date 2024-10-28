import {
  Box,
  Button,
  Container,
  Textarea,
  VStack,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";
import { useState } from "react";
import { supabase } from "../utils";

const Submit = () => {
  const [value, setValue] = useState("1");
  const [text, setText] = useState("");

  const quiz = {
    quiz_name: "Default quiz 3",
    quiz_category: "default",
  };
  const quiz_question = [
    {
      quiz_question: "What should you do if the default quiz is loaded?",
    },
  ];
  const quiz_question_choice = [
    {
      choice_letter: "A",
      choice_text: "Return to the homepage",
      is_correct: true,
    },
    {
      choice_letter: "B",
      choice_text: "Yell at the monitor",
      is_correct: false,
    },
    {
      choice_letter: "C",
      choice_text: "Be mad at Chris White",
      is_correct: false,
    },
    {
      choice_letter: "D",
      choice_text: "Save the turtles",
      is_correct: false,
    },
  ];

  type QuizChoice = {
    choice_letter: string;
    choice_text: string;
    is_correct: boolean;
  };

  type QuizQuestion = {
    quiz_question: string;
  };

  type Quiz = {
    quiz_name: string;
    quiz_category: string;
  };

  const submitQuiz = async (
    quiz: Quiz,
    quiz_question: QuizQuestion[],
    quiz_question_choice: QuizChoice[]
  ) => {
    const { data, error } = await supabase.rpc("insert_quiz", {
      quiz,
      quiz_question,
      quiz_question_choice,
    });
    return { data, error };
  };

  const handleSubmit = async () => {
    const { data, error } = await submitQuiz(
      quiz,
      quiz_question,
      quiz_question_choice
    );
    if (error) {
      console.error("Error submitting quiz:", error);
    } else {
      console.log("Quiz submitted successfully:", data);
    }
  };

  return (
    <Container maxW="100%" display="flex" justifyContent="center" mt="20">
      <Box w="90%">
        <VStack spacing={6} align="left">
          <RadioGroup p={4} onChange={setValue} value={value}>
            <Stack spacing={10} direction="row">
              <Radio value="1">Quiz</Radio>
              <Radio value="2">Flashcard</Radio>
            </Stack>
          </RadioGroup>
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Place your data object here"
            size="md"
            height="60vh"
            resize="both"
          />
          <Button onClick={handleSubmit} colorScheme="blue">
            Submit
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Submit;
