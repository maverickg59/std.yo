import { StateCreator } from "zustand";
import { defaultQuiz } from "../data";

type QuizState = {
  quiz: QuizData;
  page: number;
  answers: Answer;
};

type QuizActions = {
  setQuiz: (quiz: QuizData) => void;
  setPage: (page: number) => void;
  setAnswer: (quiz_id: number, question_id: number, answer: string) => void;
  resetAnswers: (quiz_id: number) => void;
};

export type Quiz = QuizState & QuizActions;

export const createQuizSlice: StateCreator<Quiz> = (set) => ({
  answers: {},
  quiz: defaultQuiz,
  page: 1,
  setPage: (page) => set((state) => ({ ...state, page })),
  setQuiz: (quiz: QuizData) => set((state) => ({ ...state, quiz, page: 1 })),
  setAnswer: (quiz_id: number, question_id: number, answer: string) => {
    set((state) => ({
      ...state,
      answers: {
        ...state.answers,
        [quiz_id]: { ...state.answers[quiz_id], [question_id]: answer },
      },
    }));
  },
  resetAnswers: (quiz_id: number) =>
    set((state) => {
      const newState = {
        ...state,
        answers: {
          ...state.answers,
        },
      };
      delete newState.answers[quiz_id];
      localStorage.setItem("std.yo-answers", JSON.stringify(newState));
      return newState;
    }),
});
