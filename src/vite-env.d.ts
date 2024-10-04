/// <reference types="vite/client" />

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
  flashcard_pack: Flashcard[];
};

type Category = "linux" | "html" | "css" | "javascript";
