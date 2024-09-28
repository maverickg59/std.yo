/// <reference types="vite/client" />

type Question = {
  question: string;
  choices: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: string;
};

type Data = {
  quiz_name: string;
  quiz_id: number;
  category_id: number;
  category_name: string;
  questions: Question[];
};
