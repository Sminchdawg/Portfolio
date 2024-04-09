import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "var(--font-roboto)",
    body: "var(--font-roboto)",
  },
  colors: {
    brand: {
      primary: "#36454F",
      secondary: "#5F9EAO",
      accent: "#C19A6B",
      background: "#F0EDE5",
      complemntary: "#AD6D68",
    },
  },
  styles: {
    global: {
      body: {
        color: "brand.primary",
        bg: "brand.background",
      },
    },
  },
});
