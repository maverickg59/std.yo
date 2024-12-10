export const defaultQuiz: Quiz = {
  quiz_name: "Bruh Quiz",
  quiz_category: "Bruh Code",
  quiz_id: 0,
  quiz_question: [
    {
      quiz_question:
        "What is the appropriate response to someone who says excuse me?",
      quiz_question_id: 1,
      quiz_question_choice: [
        {
          choice_letter: "A",
          choice_text: "Da heck want from me?",
          is_correct: false,
          quiz_question_choice_id: 1,
        },
        {
          choice_letter: "B",
          choice_text: "Da heck want from me bro?",
          is_correct: false,
          quiz_question_choice_id: 1,
        },
        {
          choice_letter: "C",
          choice_text: "Da heck want from me bruh?",
          is_correct: true,
          quiz_question_choice_id: 1,
        },
        {
          choice_letter: "D",
          choice_text: "Da heck want from me brah?",
          is_correct: false,
          quiz_question_choice_id: 1,
        },
      ],
    },
    {
      quiz_question: "What is the perfect nickname for you girlfriend?",
      quiz_question_id: 2,
      quiz_question_choice: [
        {
          choice_letter: "A",
          choice_text: "Honey",
          is_correct: false,
          quiz_question_choice_id: 2,
        },
        {
          choice_letter: "B",
          choice_text: "Bro",
          is_correct: false,
          quiz_question_choice_id: 2,
        },
        {
          choice_letter: "C",
          choice_text: "Bruh",
          is_correct: true,
          quiz_question_choice_id: 2,
        },
        {
          choice_letter: "D",
          choice_text: "Brah",
          is_correct: false,
          quiz_question_choice_id: 2,
        },
      ],
    },
  ],
};

// {
//   "quiz_name": "OSI Model Mastery Quiz",
//   "quiz_category": "Networking",
//   "quiz_question": [
//     {
//       "quiz_question": "Which layer of the OSI model is responsible for establishing, managing, and terminating connections?",
//       "quiz_question_choice": [
//         { "choice_letter": "A", "choice_text": "Physical", "is_correct": false },
//         { "choice_letter": "B", "choice_text": "Session", "is_correct": true },
//         { "choice_letter": "C", "choice_text": "Application", "is_correct": false },
//         { "choice_letter": "D", "choice_text": "Data Link", "is_correct": false }
//       ]
//     },
//     {
//       "quiz_question": "Which OSI layer deals with data formatting and encryption?",
//       "quiz_question_choice": [
//         { "choice_letter": "A", "choice_text": "Presentation", "is_correct": true },
//         { "choice_letter": "B", "choice_text": "Transport", "is_correct": false },
//         { "choice_letter": "C", "choice_text": "Network", "is_correct": false },
//         { "choice_letter": "D", "choice_text": "Session", "is_correct": false }
//       ]
//     },
//     {
//       "quiz_question": "What is the primary function of the Physical layer?",
//       "quiz_question_choice": [
//         { "choice_letter": "A", "choice_text": "Data Encryption", "is_correct": false },
//         { "choice_letter": "B", "choice_text": "Error Detection", "is_correct": false },
//         { "choice_letter": "C", "choice_text": "Data Transmission", "is_correct": true },
//         { "choice_letter": "D", "choice_text": "Routing", "is_correct": false }
//       ]
//     },
//     {
//       "quiz_question": "Which layer of the OSI model is responsible for routing data packets?",
//       "quiz_question_choice": [
//         { "choice_letter": "A", "choice_text": "Network", "is_correct": true },
//         { "choice_letter": "B", "choice_text": "Transport", "is_correct": false },
//         { "choice_letter": "C", "choice_text": "Session", "is_correct": false },
//         { "choice_letter": "D", "choice_text": "Presentation", "is_correct": false }
//       ]
//     },
//     {
//       "quiz_question": "What OSI layer does the TCP protocol operate at?",
//       "quiz_question_choice": [
//         { "choice_letter": "A", "choice_text": "Application", "is_correct": false },
//         { "choice_letter": "B", "choice_text": "Transport", "is_correct": true },
//         { "choice_letter": "C", "choice_text": "Network", "is_correct": false },
//         { "choice_letter": "D", "choice_text": "Session", "is_correct": false }
//       ]
//     },
//     {
//       "quiz_question": "Which OSI layer handles MAC addresses and switches?",
//       "quiz_question_choice": [
//         { "choice_letter": "A", "choice_text": "Data Link", "is_correct": true },
//         { "choice_letter": "B", "choice_text": "Physical", "is_correct": false },
//         { "choice_letter": "C", "choice_text": "Network", "is_correct": false },
//         { "choice_letter": "D", "choice_text": "Session", "is_correct": false }
//       ]
//     },
//     {
//       "quiz_question": "Which OSI layer is responsible for flow control and error handling between systems?",
//       "quiz_question_choice": [
//         { "choice_letter": "A", "choice_text": "Transport", "is_correct": true },
//         { "choice_letter": "B", "choice_text": "Data Link", "is_correct": false },
//         { "choice_letter": "C", "choice_text": "Application", "is_correct": false },
//         { "choice_letter": "D", "choice_text": "Network", "is_correct": false }
//       ]
//     },
//     {
//       "quiz_question": "Which layer interacts directly with user applications?",
//       "quiz_question_choice": [
//         { "choice_letter": "A", "choice_text": "Application", "is_correct": true },
//         { "choice_letter": "B", "choice_text": "Presentation", "is_correct": false },
//         { "choice_letter": "C", "choice_text": "Session", "is_correct": false },
//         { "choice_letter": "D", "choice_text": "Data Link", "is_correct": false }
//       ]
//     },
//     {
//       "quiz_question": "What is the main responsibility of the Presentation layer?",
//       "quiz_question_choice": [
//         { "choice_letter": "A", "choice_text": "Encrypt and compress data", "is_correct": true },
//         { "choice_letter": "B", "choice_text": "Routing packets", "is_correct": false },
//         { "choice_letter": "C", "choice_text": "Session management", "is_correct": false },
//         { "choice_letter": "D", "choice_text": "Error correction", "is_correct": false }
//       ]
//     },
//     {
//       "quiz_question": "Which layer is responsible for defining electrical signals?",
//       "quiz_question_choice": [
//         { "choice_letter": "A", "choice_text": "Physical", "is_correct": true },
//         { "choice_letter": "B", "choice_text": "Data Link", "is_correct": false },
//         { "choice_letter": "C", "choice_text": "Transport", "is_correct": false },
//         { "choice_letter": "D", "choice_text": "Application", "is_correct": false }
//       ]
//     },
//     {
//       "quiz_question": "What is the primary focus of the Data Link layer?",
//       "quiz_question_choice": [
//         { "choice_letter": "A", "choice_text": "Establishing connections", "is_correct": false },
//         { "choice_letter": "B", "choice_text": "Error correction and detection", "is_correct": true },
//         { "choice_letter": "C", "choice_text": "Routing packets", "is_correct": false },
//         { "choice_letter": "D", "choice_text": "User authentication", "is_correct": false }
//       ]
//     },
//     {
//       "quiz_question": "Which OSI layer ensures data delivery is complete and error-free?",
//       "quiz_question_choice": [
//         { "choice_letter": "A", "choice_text": "Transport", "is_correct": true },
//         { "choice_letter": "B", "choice_text": "Data Link", "is_correct": false },
//         { "choice_letter": "C", "choice_text": "Network", "is_correct": false },
//         { "choice_letter": "D", "choice_text": "Session", "is_correct": false }
//       ]
//     },
//     {
//       "quiz_question": "At which layer are IP addresses primarily used?",
//       "quiz_question_choice": [
//         { "choice_letter": "A", "choice_text": "Network", "is_correct": true },
//         { "choice_letter": "B", "choice_text": "Transport", "is_correct": false },
//         { "choice_letter": "C", "choice_text": "Data Link", "is_correct": false },
//         { "choice_letter": "D", "choice_text": "Session", "is_correct": false }
//       ]
//     },
//     {
//       "quiz_question": "Which layer is responsible for packet sequencing and reassembly?",
//       "quiz_question_choice": [
//         { "choice_letter": "A", "choice_text": "Transport", "is_correct": true },
//         { "choice_letter": "B", "choice_text": "Network", "is_correct": false },
//         { "choice_letter": "C", "choice_text": "Data Link", "is_correct": false },
//         { "choice_letter": "D", "choice_text": "Application", "is_correct": false }
//       ]
//     },
//     {
//       "quiz_question": "What OSI layer handles session creation and termination?",
//       "quiz_question_choice": [
//         { "choice_letter": "A", "choice_text": "Session", "is_correct": true },
//         { "choice_letter": "B", "choice_text": "Presentation", "is_correct": false },
//         { "choice_letter": "C", "choice_text": "Transport", "is_correct": false },
//         { "choice_letter": "D", "choice_text": "Physical", "is_correct": false }
//       ]
//     },
//     {
//       "quiz_question": "Which OSI layer converts data into electrical signals?",
//       "quiz_question_choice": [
//         { "choice_letter": "A", "choice_text": "Physical", "is_correct": true },
//         { "choice_letter": "B", "choice_text": "Data Link", "is_correct": false },
//         { "choice_letter": "C", "choice_text": "Network", "is_correct": false },
//         { "choice_letter": "D", "choice_text": "Application", "is_correct": false }
//       ]
//     },
//   ]
// }
