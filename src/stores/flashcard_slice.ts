import { StateCreator } from "zustand";
import { defaultFlashcard } from "../data";

type FlashcardState = {
  flashcards: FlashcardData;
  page: number;
};

type FlashcardActions = {
  setPage: (page: number) => void;
  setFlashcards: (flashcards: FlashcardData) => void;
};

export type Flashcard = FlashcardState & FlashcardActions;

export const createFlashcardSlice: StateCreator<Flashcard> = (set) => ({
  flashcards: defaultFlashcard,
  page: 1,
  setPage: (page: number) => set((state) => ({ ...state, page })),
  setFlashcards: (flashcards: FlashcardData) =>
    set((state) => ({ ...state, flashcards })),
});
