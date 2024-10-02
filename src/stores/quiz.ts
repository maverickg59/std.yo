import { create } from "zustand";
import { persist } from "zustand/middleware";
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

export const useQuizStore = create<QuizState & QuizActions>()(
  persist(
    (set) => ({
      answers: {},
      quiz: defaultQuiz,
      page: 1,
      setPage: (page) => set((state) => ({ ...state, page })),
      setQuiz: (quiz) => set((state) => ({ ...state, quiz, page: 1 })),
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
          localStorage.setItem("std.y-answers", JSON.stringify(newState));
          return newState;
        }),
    }),
    {
      name: "std.y-answers",
    }
  )
);
