import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { chakraProTheme } from "./theme.ts";
import { Root, Quiz, Error } from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "quiz/:quiz_id",
        element: <Quiz />,
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
