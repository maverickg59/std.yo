import { create } from "zustand";
import { produce } from "immer";
import { persist } from "zustand/middleware";
import { linux, quizzes } from "../data";

type QuizState = {
  quizData: QuizData;
  quizzes: {
    linux: QuizData[];
    html: QuizData[];
    css: QuizData[];
    javascript: QuizData[];
  };
};

type QuizActions = {
  setChosenAnswer: SetChosenAnswer;
  resetQuizData: () => void;
};

// programatically load quizzes into localstorage
// programatically generate a set of url paths based on the quiz data

export const useQuizStore = create<QuizState & QuizActions>()(
  persist(
    (set) => ({
      quizData: linux[0],
      quizzes,
      setChosenAnswer: (questionId: number, chosenAnswer: string) =>
        set(
          produce((state: { quizData: QuizData }) => {
            const question = state.quizData.questions.find(
              (q) => q.questionId === questionId
            );
            if (question) {
              question.chosenAnswer = chosenAnswer;
            }
          })
        ),
      resetQuizData: () => set({ quizData: linux[0] }),
    }),
    {
      name: "quiz-answers",
    }
  )
);
