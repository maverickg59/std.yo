import { StateCreator } from "zustand";

type QuizState = {
  page: number;
  quiz: Quiz;
  quizzes: Quiz[];
};

type QuizActions = {
  setPage: (page: number) => void;
  setQuiz: (quiz: Quiz) => void;
  setQuizzes: (quiz: Quiz[]) => void;
};

export type Quizzes = QuizState & QuizActions;

export const createQuizSlice: StateCreator<Quizzes> = (set) => ({
  page: 1,
  quizzes: [],
  quiz: {} as Quiz,
  setPage: (page) => set((state) => ({ ...state, page })),
  setQuiz: (quiz) => set((state) => ({ ...state, quiz, page: 1 })),
  setQuizzes: (quizzes) => set((state) => ({ ...state, quizzes, page: 1 })),
});
