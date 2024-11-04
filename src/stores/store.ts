import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createFlashcardSlice, Flashcard } from "./flashcard_slice";
import { createQuizSlice, Quizzes } from "./quiz_slice";
import { createSubmissionSlice, Submission } from "./submission_slice";
import { createNavigationSlice, Navigation } from "./navigation_slice";
import { createAnswersSlice, Answers } from "./answer_slice";

type Store = Flashcard & Submission & Navigation & Quizzes;

export const useAnswersStore = create<Answers>()(
  persist(createAnswersSlice, {
    name: "std.yo-answers",
  })
);

export const useStore = create<Store>((...args) => ({
  ...createFlashcardSlice(...args),
  ...createSubmissionSlice(...args),
  ...createNavigationSlice(...args),
  ...createQuizSlice(...args),
}));
