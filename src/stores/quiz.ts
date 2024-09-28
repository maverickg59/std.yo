import { create } from "zustand";
import { persist } from "zustand/middleware";

type Scores = {
  [subject: string]: {
    [quizId: string]: number;
  };
};

type QuizState = {
  scores: Scores;
  addScore: (subject: string, quizId: string, score: number) => void;
  // getScore: (subject: string, quizId: string) => number;
};

export const useQuizStore = create<QuizState>()(
  persist(
    (set) => ({
      scores: {},
      addScore: (subject: string, quizId: string, score: number) => {
        set((state) => ({
          scores: {
            ...state.scores,
            [subject]: {
              ...(state.scores[subject] || {}),
              [quizId]: score,
            },
          },
        }));
      },
      // getScore: (subject: string, quizId: string) => {
      //   return (state) => state.scores[subject]?.[quizId] || 0;
      // },
    }),
    {
      name: "quiz-scores", // localStorage key
    }
  )
);

export default useQuizStore;
