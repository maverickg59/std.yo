# Welcome to Std.y

Most commercially available study apps are weighty and flush with
ads or premium content. This app cuts the crap and allows me to
quickly generate and deploy quiz or flashcard content that is
accessible anywhere I have an internet connection.

## Disclaimer: I use ChatGPT to generate the content for this app.

<strong>Here are some of the prompts I used to generate the content:</strong>

```
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

```
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

```
Generate a flashcard pack:

1. Consider the following format:
export const defaultFlashcard: FlashcardData = {
  flashcard_pack_name: "You've found the default flashcard pack!",
  flashcard_pack_id: 20001,
  flashcard_category: "default",
  flashcard_pack: [
    { term: "JavaScript", definition: "A high-level programming language." },
    {
      term: "React",
      definition: "A JavaScript library for building user interfaces.",
    },
    {
      term: "Chakra UI",
      definition: "A simple, modular, and accessible component library.",
    },
  ],
};

2. topics list:
term: "Array.from()"
term: "Array.fromAsync()"
term: "Array.isArray()"
term: "Array.of()"
term: "Array.at()"
term: "Array.concat()"
term: "Array.copyWithin()"
term: "Array.entries()"
term: "Array.every()"
term: "Array.fill()"
term: "Array.filter()"
term: "Array.find()"
term: "Array.findIndex()"
term: "Array.findLast()"
term: "Array.findLastIndex()"
term: "Array.flat()"
term: "Array.flatMap()"
term: "Array.forEach()"
term: "Array.includes()"
term: "Array.indexOf()"
term: "Array.join()"
term: "Array.keys()"
term: "Array.lastIndexOf()"
term: "Array.map()"
term: "Array.pop()"
term: "Array.push()"
term: "Array.reduce()"
term: "Array.reduceRight()"
term: "Array.reverse()"
term: "Array.shift()"
term: "Array.slice()"
term: "Array.some()"
term: "Array.sort()"
term: "Array.splice()"
term: "Array.toLocaleString()"
term: "Array.toReversed()"
term: "Array.toSorted()"
term: "Array.toSpliced()"
term: "Array.toString()"
term: "Array.unshift()"
term: "Array.values()"
term: "Array.with()"
term: "Array.length()"

3. generate a new flashcard_pack from the topics list where the term is the topic list item and the description consists of:
- a concise explanation of what the method does
- an example use case for the method
```

## Road Map:

1. add home button to mobile navigation
2. update navigation implementation to prevent close of nav menu accordions
3. programatically close nav menu on mobile
4. beautify content layout for /, /quiz, /layout
5. randomize initial display of term or description
6. add ChatGPT promptability
