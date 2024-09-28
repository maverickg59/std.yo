import { extendTheme } from "@chakra-ui/react";
import { theme } from "@chakra-ui/pro-theme";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
const proTheme = extendTheme({ config }, theme);
const extension = {
  colors: { ...proTheme.colors, brand: proTheme.colors.blue },
};
export const chakraProTheme = extendTheme(extension, proTheme);
