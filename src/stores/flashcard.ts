import { create } from "zustand";
import { defaultFlashcard } from "../data";

type FlashcardState = {
  flashcards: FlashcardData;
  page: number;
};

type FlashcardActions = {
  setPage: (page: number) => void;
  setFlashcards: (flashcards: FlashcardData) => void;
};

export const useFlashcardStore = create<FlashcardState & FlashcardActions>()(
  (set) => ({
    flashcards: defaultFlashcard,
    page: 1,
    setPage: (page) => set((state) => ({ ...state, page })),
    setFlashcards: (flashcards) => set((state) => ({ ...state, flashcards })),
  })
);
