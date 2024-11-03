import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createFlashcardSlice, Flashcard } from "./flashcard_slice";
import { createQuizSlice, Quizzes } from "./quiz_slice";
import { createSubmissionSlice, Submission } from "./submission_slice";
import { createNavigationSlice, Navigation } from "./navigation_slice";

type Store = Flashcard & Quizzes & Submission & Navigation;

export const useStore = create<Store>((...args) => ({
  ...createFlashcardSlice(...args),
  ...createSubmissionSlice(...args),
  ...createNavigationSlice(...args),
  ...persist(createQuizSlice, { name: "std.yo-answers" })(...args),
}));
