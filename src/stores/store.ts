import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createFlashcardSlice, Flashcard } from "./flashcard_slice";
import { createQuizSlice, Quizzes } from "./quiz_slice";
import { createSubmissionSlice, Submission } from "./submission_slice";

export const useStore = create<Flashcard & Quizzes & Submission>((...args) => ({
  ...createFlashcardSlice(...args),
  ...persist(createQuizSlice, { name: "std.yo-answers" })(...args),
  ...createSubmissionSlice(...args),
}));
