import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  ChakraProvider,
  extendTheme,
  // type ThemeConfig,
} from "@chakra-ui/react";
import { theme } from "@chakra-ui/pro-theme";

// const themeConfig: ThemeConfig = {
//   initialColorMode: "dark",
//   useSystemColorMode: false,
// };

// const darkTheme = extendTheme(themeConfig);

const extendedTheme = extendTheme(theme);

const proThemeConfig = {
  colors: { ...extendedTheme.colors, brand: extendedTheme.colors.teal },
};

const proTheme = extendTheme(proThemeConfig, extendedTheme);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={proTheme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
