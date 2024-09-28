export const defaultQuizData: QuizData = {
  quiz_name: "Linux Commands Quiz",
  quiz_id: 10001,
  category_id: 1,
  category_name: "linux",
  questions: [
    {
      questionId: 1,
      question: "What does the 'ls' command do?",
      choices: {
        A: "Moves a file",
        B: "Creates a new directory",
        C: "Deletes a file",
        D: "Lists directory contents",
      },
      correctAnswer: "D",
      chosenAnswer: "",
    },
  ],
};
