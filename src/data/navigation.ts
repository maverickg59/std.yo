import { MdQuiz } from "react-icons/md";
import { IoFlashlightSharp } from "react-icons/io5";

export const appFeatures = [
  {
    name: "Quizzes",
    description:
      "Concise quizzes crafted to reinforce your knowledge and enhance your learning experience.",
    icon: MdQuiz,
    href: "/quiz/39",
    linkName: "Try a quiz",
    linksInternally: true,
  },
  {
    name: "Flashcards",
    description:
      "Interactive flashcards designed to strengthen your recall and support effective learning.",
    icon: IoFlashlightSharp,
    href: "/flashcards/5",
    linkName: "Try some flashcards",
    linksInternally: true,
  },
];
