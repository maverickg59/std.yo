export const javascriptQuiz: QuizData = {
  quiz_name: "JavaScript Array Methods",
  quiz_id: 10002,
  quiz_category: "javascript",
  questions: [
    {
      questionId: 1,
      question:
        "Which method adds one or more elements to the end of an array?",
      choices: {
        A: "arr.unshift()",
        B: "arr.push()",
        C: "arr.concat()",
        D: "arr.slice()",
      },
      correctAnswer: "B",
    },
    {
      questionId: 2,
      question:
        "Which method creates a new array with all elements that pass a test?",
      choices: {
        A: "arr.filter()",
        B: "arr.map()",
        C: "arr.reduce()",
        D: "arr.find()",
      },
      correctAnswer: "A",
    },
    {
      questionId: 3,
      question:
        "Which method returns the first element in an array that satisfies a condition?",
      choices: {
        A: "arr.filter()",
        B: "arr.find()",
        C: "arr.some()",
        D: "arr.every()",
      },
      correctAnswer: "B",
    },
    {
      questionId: 4,
      question:
        "Which method transforms each element in an array and returns a new array?",
      choices: {
        A: "arr.filter()",
        B: "arr.forEach()",
        C: "arr.map()",
        D: "arr.reduce()",
      },
      correctAnswer: "C",
    },
    {
      questionId: 5,
      question:
        "Which method checks if at least one element in an array passes a test?",
      choices: {
        A: "arr.every()",
        B: "arr.find()",
        C: "arr.some()",
        D: "arr.includes()",
      },
      correctAnswer: "C",
    },
    {
      questionId: 6,
      question:
        "Which method removes the first element from an array and returns that element?",
      choices: {
        A: "arr.shift()",
        B: "arr.splice()",
        C: "arr.pop()",
        D: "arr.slice()",
      },
      correctAnswer: "A",
    },
    {
      questionId: 7,
      question:
        "Which method merges two or more arrays and returns a new array?",
      choices: {
        A: "arr.concat()",
        B: "arr.join()",
        C: "arr.push()",
        D: "arr.unshift()",
      },
      correctAnswer: "A",
    },
    {
      questionId: 8,
      question:
        "Which method reduces the array to a single value by applying a function?",
      choices: {
        A: "arr.filter()",
        B: "arr.reduce()",
        C: "arr.map()",
        D: "arr.forEach()",
      },
      correctAnswer: "B",
    },
    {
      questionId: 9,
      question:
        "Which method removes the last element from an array and returns that element?",
      choices: {
        A: "arr.shift()",
        B: "arr.slice()",
        C: "arr.splice()",
        D: "arr.pop()",
      },
      correctAnswer: "D",
    },
    {
      questionId: 10,
      question:
        "Which method returns the index of the first occurrence of a specified element?",
      choices: {
        A: "arr.lastIndexOf()",
        B: "arr.findIndex()",
        C: "arr.indexOf()",
        D: "arr.includes()",
      },
      correctAnswer: "C",
    },
  ],
};
