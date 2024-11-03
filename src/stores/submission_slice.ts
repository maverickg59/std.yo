import { StateCreator } from "zustand";

type SubmissionState = {
  quiz_submission: {
    quiz_string: string;
    quiz_error: string;
    json_quiz?: QuizSubmission;
  };
};

type SubmissionActions = {
  setQuizString: (quiz: string) => void;
  setQuizError: (quiz_error: string) => void;
  setQuizSubmission: (json_quiz: QuizSubmission) => void;
};

export type Submission = SubmissionState & SubmissionActions;

export const createSubmissionSlice: StateCreator<Submission> = (set) => ({
  quiz_submission: {
    quiz_string: "",
    quiz_error: "",
  },
  setQuizError: (quiz_error) =>
    set((state) => ({
      ...state,
      quiz_submission: { ...state.quiz_submission, quiz_error },
    })),
  setQuizString: (quiz_string) =>
    set((state) => ({
      ...state,
      quiz_submission: { ...state.quiz_submission, quiz_string },
    })),
  setQuizSubmission(json_quiz) {
    set((state) => ({
      ...state,
      quiz_submission: {
        ...state.quiz_submission,
        json_quiz,
      },
    }));
  },
});
