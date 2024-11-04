import { StateCreator } from "zustand";

type SubmissionState = {
  quiz_submission: {
    quiz_string: string;
    quiz_error: string;
    json_quiz?: QuizSubmission;
  };
  flashcard_submission: {
    flashcard_pack_string: string;
    flashcard_pack_error: string;
    json_flashcard_pack?: FlashcardPackSubmission;
  };
};

type SubmissionActions = {
  setQuizError: (quiz_error: string) => void;
  setQuizString: (quiz_string: string) => void;
  setQuizSubmission: (json_quiz: QuizSubmission) => void;
  setFlashcardPackError: (flashcard_error: string) => void;
  setFlashcardPackString: (flashcard_pack_string: string) => void;
  setFlashcardPackSubmission: (
    json_flashcard_pack: FlashcardPackSubmission
  ) => void;
};

export type Submission = SubmissionState & SubmissionActions;

export const createSubmissionSlice: StateCreator<Submission> = (set) => ({
  quiz_submission: {
    quiz_string: "",
    quiz_error: "",
  },
  flashcard_submission: {
    flashcard_pack_string: "",
    flashcard_pack_error: "",
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
  setFlashcardPackError: (flashcard_pack_error) =>
    set((state) => ({
      ...state,
      flashcard_submission: {
        ...state.flashcard_submission,
        flashcard_pack_error,
      },
    })),
  setFlashcardPackString: (flashcard_pack_string) =>
    set((state) => ({
      ...state,
      flashcard_submission: {
        ...state.flashcard_submission,
        flashcard_pack_string,
      },
    })),
  setFlashcardPackSubmission(json_flashcard_pack) {
    set((state) => ({
      ...state,
      flashcard_submission: {
        ...state.flashcard_submission,
        json_flashcard_pack,
      },
    }));
  },
});
