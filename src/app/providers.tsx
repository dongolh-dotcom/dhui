// app/providers.tsx
"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider 
      attribute="data-theme" 
      defaultTheme="system" 
      enableSystem
    >
      {children}
    </NextThemesProvider>
  );
}
