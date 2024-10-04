import { linuxQuiz } from "./quizzes/linux";
import { htmlQuiz } from "./quizzes/html";
import { cssQuiz } from "./quizzes/css";
import { javascriptQuiz } from "./quizzes/javascript";
import { javascriptFlashcard } from "./flashcards/javascript";
import { threatFlashcard } from "./flashcards/threat";
export { defaultQuiz } from "./quizzes/default";
export { defaultFlashcard } from "./flashcards/default";
export { navPaths, appFeatures } from "./navigation";
export const quizzes = [
  ...linuxQuiz,
  ...htmlQuiz,
  ...cssQuiz,
  ...javascriptQuiz,
];
export const flashcards = [...javascriptFlashcard, ...threatFlashcard];
