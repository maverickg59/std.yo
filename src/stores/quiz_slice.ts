import { StateCreator } from "zustand";
import { defaultQuiz } from "../data";

type QuizState = {
  quiz: QuizData;
  newQuiz: Quiz;
  quizzes: Quiz[];
  page: number;
  answers: Answer;
};

type QuizActions = {
  setQuiz: (quiz: QuizData) => void;
  setQuizzes: (quiz: Quiz[]) => void;
  setNewQuiz: (quiz: Quiz) => void;
  setPage: (page: number) => void;
  setAnswer: (quiz_id: number, question_id: number, answer: string) => void;
  resetAnswers: (quiz_id: number) => void;
};

export type Quizzes = QuizState & QuizActions;

export const createQuizSlice: StateCreator<Quizzes> = (set) => ({
  answers: {},
  quiz: defaultQuiz,
  newQuiz: {} as Quiz,
  quizzes: [],
  page: 1,
  setPage: (page) => set((state) => ({ ...state, page })),
  setQuiz: (quiz: QuizData) => set((state) => ({ ...state, quiz, page: 1 })),
  setNewQuiz: (quiz: Quiz) =>
    set((state) => ({ ...state, newQuiz: quiz, page: 1 })),
  setQuizzes: (quizzes: Quiz[]) =>
    set((state) => ({ ...state, quizzes, page: 1 })),
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
