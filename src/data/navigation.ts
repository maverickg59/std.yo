import { MdQuiz, MdOutlineContentPasteSearch } from "react-icons/md";
import { IoFlashlightSharp } from "react-icons/io5";
import { FaLinux } from "react-icons/fa";
import { RiCriminalLine } from "react-icons/ri";

export const navPaths = {
  flashcards: {
    linux: {
      category_name: "JavaScript",
      category_icon: FaLinux,
      content: [
        {
          quiz_id: 20001,
          quiz_name: "JavaScript Arrays",
        },
      ],
    },
    threat: {
      category_name: "Threat",
      category_icon: RiCriminalLine,
      content: [
        {
          quiz_id: 20002,
          quiz_name: "Threat Groups",
        },
      ],
    },
  },
};

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
    href: "/flashcards/20001",
    linkName: "Try some flashcards",
    linksInternally: true,
  },
  {
    name: "Content Request",
    description:
      "Request a subject by sending an email or making a pull request on GitHub.",
    icon: MdOutlineContentPasteSearch,
    href: "https://github.com/maverickg59/std.yo",
    linkName: "Make pull request",
    linksInternally: false,
  },
];
