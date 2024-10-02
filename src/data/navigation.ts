import { MdQuiz, MdOutlineContentPasteSearch } from "react-icons/md";
import { IoFlashlightSharp } from "react-icons/io5";
import { FaLinux, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";

export const navPaths = {
  quizzes: {
    linux: {
      category_name: "Linux",
      category_icon: FaLinux,
      content: [
        {
          quiz_id: 10001,
          quiz_name: "Linux Commands",
        },
      ],
    },
    html: {
      category_name: "HTML",
      category_icon: FaHtml5,
      content: [
        {
          quiz_id: 10003,
          quiz_name: "HTML Tags",
        },
      ],
    },
    css: {
      category_name: "CSS",
      category_icon: FaCss3Alt,
      content: [
        {
          quiz_id: 10004,
          quiz_name: "CSS Atributes",
        },
      ],
    },
    javascript: {
      category_name: "JavaScript",
      category_icon: FaJsSquare,
      content: [
        {
          quiz_id: 10002,
          quiz_name: "JavaScript Arrays",
        },
      ],
    },
  },
  flashcards: {
    linux: {
      category_name: "Linux",
      category_icon: FaLinux,
      content: [
        {
          quiz_id: 20001,
          quiz_name: "",
        },
      ],
    },
    html: {
      category_name: "HTML",
      category_icon: FaHtml5,
      content: [
        {
          quiz_id: 20002,
          quiz_name: "",
        },
      ],
    },
    css: {
      category_name: "CSS",
      category_icon: FaCss3Alt,
      content: [
        {
          quiz_id: 20003,
          quiz_name: "",
        },
      ],
    },
    javascript: {
      category_name: "JavaScript",
      category_icon: FaJsSquare,
      content: [
        {
          quiz_id: 20004,
          quiz_name: "",
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
    href: "/quiz/10001",
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
