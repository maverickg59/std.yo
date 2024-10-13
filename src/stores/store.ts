import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createFlashcardSlice } from "./flashcard_slice";
import { createQuizSlice } from "./quiz_slice";

import { Flashcard } from "./flashcard_slice";
import { Quiz } from "./quiz_slice";

export const useStore = create<Flashcard & Quiz>((...args) => ({
  ...createFlashcardSlice(...args),
  ...persist(createQuizSlice, { name: "std.yo-answers" })(...args),
}));
