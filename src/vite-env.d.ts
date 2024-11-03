/// <reference types="vite/client" />

// latest version of quiz types
type Quiz = {
  quiz_name: string;
  quiz_category: string;
  quiz_id: number;
  quiz_question: QuizQuestion[];
};

type QuizSubmission = Omit<Quiz, "quiz_id">;

type QuizQuestion = {
  quiz_question: string;
  quiz_question_choice: QuizQuestionChoice[];
};

type QuizQuestionChoice = {
  choice_letter: string;
  choice_text: string;
  is_correct: boolean;
};

// older version of quiz types
type Question = {
  questionId: number;
  question: string;
  choices: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: string;
};

type QuizData = {
  quiz_name: string;
  quiz_id: number;
  quiz_category: string;
  questions: Question[];
};

type Answer = {
  [quizId: number]: {
    [questionId: number]: string;
  };
};

type Flashcard = {
  term: string;
  definition: string;
};

type FlashcardData = {
  flashcard_pack_name: string;
  flashcard_pack_id: number;
  flashcard_category: string;
  flashcard_pack: Flashcard[];
};

type Category = "linux" | "html" | "css" | "javascript";
