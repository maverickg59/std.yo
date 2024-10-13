import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { chakraProTheme } from "./theme.ts";
import { Root, Quiz, ErrorRoute, FlashcardList, Submit } from "./routes/index.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorRoute />,
    children: [
      {
        path: "quiz/:quiz_id",
        element: <Quiz />,
      },
      {
        path: "flashcards/:flashcard_id",
        element: <FlashcardList />,
      },
      {
        path: "submit",
        element: <Submit />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={chakraProTheme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>
);
