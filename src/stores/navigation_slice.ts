import { StateCreator } from "zustand";

type NavigationState = {
  quiz_navigation: QuizNavItem[];
};

type NavigationActions = {
  setQuizNavigation: (quiz_navigation: QuizNavItem[]) => void;
};
export type Navigation = NavigationState & NavigationActions;

export const createNavigationSlice: StateCreator<Navigation> = (set) => ({
  quiz_navigation: [],
  setQuizNavigation: (quiz_navigation) =>
    set((state) => ({ ...state, quiz_navigation })),
});
