# Welcome to Std.y

Most commercially available study apps are weighty and flush with
ads or premium content. This app cuts the crap and allows me to
quickly generate and deploy quiz or flashcard content that is
accessible anywhere I have an internet connection.

## Disclaimer: I use ChatGPT to generate the content for this app.

<strong>Here are some of the prompts I used to generate the content:</strong>

```json
Generate individual quiz questions:

1. Randomly choose a key between A, B, C, and D to which you'll assign a correct answer.

2. Consider the following format:
choices: {
A: "Sets a CSS property",
B: "Sets the text color",
C: "Sets the border color",
D: "Sets the font size",
}

3. Give me one correct answer and three plausible, but incorrect answers to the following question:

What does the 'font-size' property do?
```

```json
Generate a 10 question quiz:

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

## Road Map:

1. add home button to mobile navigation
2. update navigation implementation to prevent close of nav menu accordions
3. add ChatGPT promptability
