import { create } from "zustand";
import { produce } from "immer";
import { persist } from "zustand/middleware";
import { linuxCommandsQuiz } from "../data";

type QuizState = { quizData: QuizData };

type QuizActions = {
  setChosenAnswer: SetChosenAnswer;
  resetQuizData: () => void;
};

export const useQuizStore = create<QuizState & QuizActions>()(
  persist(
    (set) => ({
      quizData: linuxCommandsQuiz,
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
      resetQuizData: () => set({ quizData: linuxCommandsQuiz }),
    }),
    {
      name: "quiz-answers",
    }
  )
);

export default useQuizStore;
