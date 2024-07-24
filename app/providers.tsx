"use client";

import { ThemeProvider } from "next-themes";
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';


export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <MantineProvider>{children}</MantineProvider>
    </ThemeProvider>
  );
}
