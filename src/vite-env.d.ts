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

type Answer = {
  [quizId: number]: {
    [questionId: number]: string;
  };
};

type FlashcardPack = {
  flashcard_pack_name: string;
  flashcard_pack_id: number;
  flashcard_pack_category: string;
  flashcard_pack_content: FlashcardContent[];
};

type FlashcardPackSubmission = Omit<
  FlashcardPack,
  "flashcard_pack_id" | "flashcard_id"
>;

type Flashcard = {
  flashcard_pack_id: number;
  flashcard_id: number;
  term: string;
  definition: string;
};

type ContentNavItem = {
  category_name: string;
  content: [
    {
      content_name: string;
      content_id: number;
    }
  ];
};
