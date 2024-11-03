/// <reference types="vite/client" />

type Quiz = {
  quiz_id: number;
  quiz_name: string;
  quiz_category: string;
  quiz_question: QuizQuestion[];
};

type QuizSubmission = Omit<
  Quiz,
  "quiz_id" | "quiz_question_id" | "quiz_question_choice_id"
>;

type QuizQuestion = {
  quiz_question: string;
  quiz_question_id: number;
  quiz_question_choice: QuizQuestionChoice[];
};

type QuizQuestionChoice = {
  choice_letter: string;
  choice_text: string;
  is_correct: boolean;
  quiz_question_choice_id: number;
};

type QuizNavItem = {
  category_name: string;
  content: [
    {
      quiz_name: string;
      quiz_id: number;
    }
  ];
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
