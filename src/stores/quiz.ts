import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Scores {
  [subject: string]: {
    [quizId: string]: number;
  };
}

interface QuizStore {
  scores: Scores;
  addScore: (subject: string, quizId: string, score: number) => void;
  //   getScore: (subject: string, quizId: string) => number;
}

const useQuizStore = create<QuizStore>()(
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
      //   getScore: (subject: string, quizId: string) => {
      //     return (state) => state.scores[subject]?.[quizId] || 0;
      //   },
    }),
    {
      name: "quiz-scores", // localStorage key
    }
  )
);

export default useQuizStore;
