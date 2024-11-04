import { StateCreator } from "zustand";

type FlashcardState = {
  flashcard_pack: FlashcardPack;
  flashcards: FlashcardPack[];
  page: number;
};

type FlashcardActions = {
  setPage: (page: number) => void;
  setFlashcardPack: (flashcards: FlashcardPack) => void;
  setFlashcards: (flashcard_pack: FlashcardPack[]) => void;
};

export type Flashcard = FlashcardState & FlashcardActions;

export const createFlashcardSlice: StateCreator<Flashcard> = (set) => ({
  page: 1,
  flashcards: [],
  flashcard_pack: {} as FlashcardPack,
  setPage: (page: number) => set((state) => ({ ...state, page })),
  setFlashcardPack: (flashcard_pack) =>
    set((state) => ({ ...state, flashcard_pack })),
  setFlashcards: (flashcard_pack) =>
    set((state) => ({ ...state, flashcards: flashcard_pack })),
});
