import { MdQuiz, MdOutlineContentPasteSearch } from "react-icons/md";
import { IoFlashlightSharp } from "react-icons/io5";
import { FaLinux, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { RiCriminalLine } from "react-icons/ri";

export const navPaths = {
  quizzes: {
    linux: {
      category_name: "Linux",
      category_icon: FaLinux,
      content: [
        {
          id: 10001,
          name: "Linux Commands",
        },
      ],
    },
    html: {
      category_name: "HTML",
      category_icon: FaHtml5,
      content: [
        {
          id: 10003,
          name: "HTML Tags",
        },
      ],
    },
    css: {
      category_name: "CSS",
      category_icon: FaCss3Alt,
      content: [
        {
          id: 10004,
          name: "CSS Atributes",
        },
      ],
    },
    javascript: {
      category_name: "JavaScript",
      category_icon: FaJsSquare,
      content: [
        {
          id: 10002,
          name: "JavaScript Arrays",
        },
      ],
    },
  },
  flashcards: {
    linux: {
      category_name: "JavaScript",
      category_icon: FaLinux,
      content: [
        {
          id: 20001,
          name: "JavaScript Arrays",
        },
      ],
    },
    threat: {
      category_name: "Threat",
      category_icon: RiCriminalLine,
      content: [
        {
          id: 20002,
          name: "Threat Groups",
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
