"use client";

import { ThemeProvider } from "next-themes";
import { MantineProvider, createTheme } from "@mantine/core";
import '@mantine/core/styles.css';

const theme = createTheme({
  // You can add Mantine-specific theme options here
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <MantineProvider theme={theme} defaultColorScheme="light">
        {children}
      </MantineProvider>
    </ThemeProvider>
  );
}