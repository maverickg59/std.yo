import { linux } from "./quizzes/linux";
import { html } from "./quizzes/html";
import { css } from "./quizzes/css";
import { javascript } from "./quizzes/javascript";
export { defaultQuiz } from "./quizzes/default";
export { navPaths } from "./navigation";
export const quizzes = [...linux, ...html, ...css, ...javascript];
