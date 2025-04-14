
"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: string;
  storageKey?: string;
};

export function ThemeProvider({ 
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  return (
    <NextThemesProvider defaultTheme={defaultTheme} storageKey={storageKey} {...props}>
      {children}
    </NextThemesProvider>
  )
}

type ThemeProviderState = {
  theme: string | undefined;
  setTheme: (theme: string) => void;
}

const initialState: ThemeProviderState = {
  theme: undefined,
  setTheme: () => null,
}

export const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export const useTheme = () => {
  return useContext(ThemeProviderContext)
}
