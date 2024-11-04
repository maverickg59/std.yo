import { StateCreator } from "zustand";

type NavigationState = {
  quiz_navigation: ContentNavItem[];
  flashcard_navigation: ContentNavItem[];
};

type NavigationActions = {
  setQuizNavigation: (quiz_navigation: ContentNavItem[]) => void;
  setFlashcardNavigation: (flashcard_navigation: ContentNavItem[]) => void;
};
export type Navigation = NavigationState & NavigationActions;

export const createNavigationSlice: StateCreator<Navigation> = (set) => ({
  quiz_navigation: [],
  flashcard_navigation: [],
  setQuizNavigation: (quiz_navigation) =>
    set((state) => ({ ...state, quiz_navigation })),
  setFlashcardNavigation: (flashcard_navigation) =>
    set((state) => ({ ...state, flashcard_navigation })),
});
