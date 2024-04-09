"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { theme } from "../../assets/theme";

export const Providers = ({ children }: { children: ReactNode }) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);
