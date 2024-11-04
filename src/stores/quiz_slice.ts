import { StateCreator } from "zustand";

type QuizState = {
  page: number;
  quiz: Quiz;
  quizzes: Quiz[];
  answers: Answer;
};

type QuizActions = {
  setPage: (page: number) => void;
  setQuiz: (quiz: Quiz) => void;
  setQuizzes: (quiz: Quiz[]) => void;
  setAnswer: (quiz_id: number, question_id: number, answer: string) => void;
  resetAnswers: (quiz_id: number) => void;
};

export type Quizzes = QuizState & QuizActions;

export const createQuizSlice: StateCreator<Quizzes> = (set) => ({
  page: 1,
  answers: {},
  quizzes: [],
  quiz: {} as Quiz,
  setPage: (page) => set((state) => ({ ...state, page })),
  setQuiz: (quiz) => set((state) => ({ ...state, quiz, page: 1 })),
  setQuizzes: (quizzes) => set((state) => ({ ...state, quizzes, page: 1 })),
  setAnswer: (quiz_id, question_id, answer) => {
    set((state) => ({
      ...state,
      answers: {
        ...state.answers,
        [quiz_id]: { ...state.answers[quiz_id], [question_id]: answer },
      },
    }));
  },
  resetAnswers: (quiz_id) =>
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
