"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type AboutStorybookContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const AboutStorybookContext = createContext<AboutStorybookContextValue | null>(
  null
);

export function AboutStorybookProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, open, close }),
    [isOpen, open, close]
  );

  return (
    <AboutStorybookContext.Provider value={value}>
      {children}
    </AboutStorybookContext.Provider>
  );
}

export function useAboutStorybook() {
  const ctx = useContext(AboutStorybookContext);
  if (!ctx) {
    throw new Error(
      "useAboutStorybook must be used within AboutStorybookProvider"
    );
  }
  return ctx;
}
