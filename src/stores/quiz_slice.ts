import { StateCreator } from "zustand";
import { defaultQuiz } from "../data";

type QuizState = {
  quiz: QuizData;
  new_quiz_submission: {
    quiz_string: string;
    quiz_error: string;
    json_quiz?: NewQuizSubmission;
  };
  page: number;
  answers: Answer;
};

type QuizActions = {
  setQuiz: (quiz: QuizData) => void;
  setQuizString: (quiz: string) => void;
  setQuizError: (quiz_error: string) => void;
  setNewQuizSubmission: (json_quiz: NewQuizSubmission) => void;
  setPage: (page: number) => void;
  setAnswer: (quiz_id: number, question_id: number, answer: string) => void;
  resetAnswers: (quiz_id: number) => void;
};

export type Quiz = QuizState & QuizActions;

export const createQuizSlice: StateCreator<Quiz> = (set) => ({
  answers: {},
  quiz: defaultQuiz,
  page: 1,
  new_quiz_submission: {
    quiz_string: "",
    quiz_error: "",
  },
  setPage: (page) => set((state) => ({ ...state, page })),
  setNewQuizSubmission(json_quiz) {
    set((state) => ({
      ...state,
      new_quiz_submission: {
        ...state.new_quiz_submission,
        json_quiz,
      },
    }));
  },
  setQuizError: (quiz_error) =>
    set((state) => ({
      ...state,
      new_quiz_submission: { ...state.new_quiz_submission, quiz_error },
    })),
  setQuizString: (quiz_string) =>
    set((state) => ({
      ...state,
      new_quiz_submission: { ...state.new_quiz_submission, quiz_string },
    })),
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
