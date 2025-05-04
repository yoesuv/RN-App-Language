import { ReactNode } from "react";

export type LanguageContextType = {
  language: string;
  toggleLanguage: (language: string) => void;
  translate: (key: string) => string;
};

export type LanguageProviderProps = {
  children: ReactNode;
};
