export const defaultQuiz: QuizData = {
  quiz_name: "You've found the default quiz!",
  quiz_id: 10000,
  quiz_category: "default",
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

export const newDefault: Quiz = {
  quiz_name: "Bruh Quiz",
  quiz_category: "Bruh Code",
  quiz_id: 0,
  quiz_question: [
    {
      quiz_question:
        "What is the appropriate response to someone who says excuse me?",
      quiz_question_choice: [
        {
          choice_letter: "A",
          choice_text: "Da heck want from me?",
          is_correct: false,
        },
        {
          choice_letter: "B",
          choice_text: "Da heck want from me bro?",
          is_correct: false,
        },
        {
          choice_letter: "C",
          choice_text: "Da heck want from me bruh?",
          is_correct: true,
        },
        {
          choice_letter: "D",
          choice_text: "Da heck want from me brah?",
          is_correct: false,
        },
      ],
    },
    {
      quiz_question: "What is the perfect nickname for you girlfriend?",
      quiz_question_choice: [
        {
          choice_letter: "A",
          choice_text: "Honey",
          is_correct: false,
        },
        {
          choice_letter: "B",
          choice_text: "Bro",
          is_correct: false,
        },
        {
          choice_letter: "C",
          choice_text: "Bruh",
          is_correct: true,
        },
        {
          choice_letter: "D",
          choice_text: "Brah",
          is_correct: false,
        },
      ],
    },
  ],
};
