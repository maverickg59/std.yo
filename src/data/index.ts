import { linuxQuiz } from "./quizzes/linux";
import { htmlQuiz } from "./quizzes/html";
import { cssQuiz } from "./quizzes/css";
export { defaultQuiz } from "./quizzes/default";

import { javascriptQuiz } from "./quizzes/javascript";
import { javascriptFlashcard } from "./flashcards/javascript";
import { threatOneFlashcard } from "./flashcards/threat_one";
import { threatTwoFlashcard } from "./flashcards/threat_two";
import { threatThreeFlashcard } from "./flashcards/threat_three";
import { threatFourFlashcard } from "./flashcards/threat_four";
import { threatFiveFlashcard } from "./flashcards/threat_five";
export { defaultFlashcard } from "./flashcards/default";

export { navPaths, appFeatures } from "./navigation";

export const quizzes = [linuxQuiz, htmlQuiz, cssQuiz, javascriptQuiz];

export const flashcards = [
  javascriptFlashcard,
  threatOneFlashcard,
  threatTwoFlashcard,
  threatThreeFlashcard,
  threatFourFlashcard,
  threatFiveFlashcard,
];
