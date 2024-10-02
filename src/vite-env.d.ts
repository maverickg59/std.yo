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
  category_id: number;
  category_name: string;
  questions: Question[];
};

type Answer = {
  [quizId: number]: {
    [questionId: number]: string;
  };
};

type Category = "linux" | "html" | "css" | "javascript";
