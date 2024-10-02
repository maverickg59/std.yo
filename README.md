1. create flashcards
2. CSS updates to prettify

- notify user of quiz answer selection status with red/green highlight
- mobile nav menu layout

### Disclaimer: I've used ChatGPT to generate the content for these quizzes.

<strong>Here are some of my prompts:</strong>

Generate individual quiz questions:

```
first, randomly choose a key between A, B, C, and D to which you'll assign a correct answer.

second, consider the following format:
choices: {
A: "Sets a CSS property",
B: "Sets the text color",
C: "Sets the border color",
D: "Sets the font size",
}

third, give me one correct answer and three plausible, but incorrect answers to the following question:

What does the 'font-size' property do?
```

Generate a quiz:

```
1. Randomly choose a key between A, B, C, and D to which you'll assign a correct answer.

2. Consider the following format:
export const defaultQuiz: QuizData = {
  quiz_name: "Default Quiz",
  quiz_id: 10000,
  questions: [
    {
      questionId: 1,
      question: "What should you do if the default quiz is loaded?",
      choices: {
        A: "Return to the homepage",
        B: "Yell at the monitor",
        C: "Be mad at Chris White",
        D: "Save the turtles",
      },
      correctAnswer: "A",
    },
  ],
};

3. Write a quiz with the following properties:
- 10 questions about [insert subject]
- each question should be unique
- one correct answer and three plausible, but incorrect answers per question
- the plausible answers should be similar enough to not make the correct answer obvious
- the correct answer should not contain language that is contained in the question unless necessary
- each correct and each plausible answer should be unique
```
