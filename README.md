# Welcome to Std.yo

Most commercially available study apps are weighty and flush with
ads or premium content. This app cuts the crap and allows me to
quickly generate and deploy quiz or flashcard content that is
accessible anywhere I have an internet connection.

## Disclaimer: I use ChatGPT to generate the content for this app.

<strong>Here are some of the prompts I used to generate the content:</strong>

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
Array.from()
Array.fromAsync()
Array.isArray()
Array.of()
Array.at()
Array.concat()
Array.copyWithin()
Array.entries()
Array.every()
Array.fill()
Array.filter()
Array.find()
Array.findIndex()
Array.findLast()
Array.findLastIndex()
Array.flat()
Array.flatMap()
Array.forEach()
Array.includes()
Array.indexOf()
Array.join()
Array.keys()
Array.lastIndexOf()
Array.map()
Array.pop()
Array.push()
Array.reduce()
Array.reduceRight()
Array.reverse()
Array.shift()
Array.slice()
Array.some()
Array.sort()
Array.splice()
Array.toLocaleString()
Array.toReversed()
Array.toSorted()
Array.toSpliced()
Array.toString()
Array.unshift()
Array.values()
Array.with()
Array.length()

3. generate a new flashcard_pack from the topics list where the term is the topic list item and the description consists of:
- a concise explanation of what the method does
- an example use case for the method
```

## Road Map:

1. add home button to mobile navigation
2. on mobile close nav menu on navigate
3. beautify content layout for /, /quiz, /layout
4. flashcards: randomize initial display of term or description
5. call OpenAI to create quiz

### Supabase integration:

3. store flashcards in supabase via RPC function

### Quiz Topics:

-

### Flashcard Topics:

- linux filesystem
- linux file permissions
- linux commands
- linux distros
- absolute vs relative path
