import { StateCreator } from "zustand";

type AnswerState = {
  answers: Answer;
};

type AnswerActions = {
  setAnswer: (quiz_id: number, question_id: number, answer: string) => void;
  resetAnswers: (quiz_id: number) => void;
};

export type Answers = AnswerState & AnswerActions;

export const createAnswersSlice: StateCreator<Answers> = (set) => ({
  answers: {},
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
