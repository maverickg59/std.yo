import { object, string, boolean, array } from "superstruct";

export const QuizSchema = object({
  quiz_name: string(),
  quiz_category: string(),
  quiz_question: array(
    object({
      quiz_question: string(),
      quiz_question_choice: array(
        object({
          choice_letter: string(),
          choice_text: string(),
          is_correct: boolean(),
        })
      ),
    })
  ),
});
