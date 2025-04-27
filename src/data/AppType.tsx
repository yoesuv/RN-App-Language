import { ReactNode } from "react";

export type LanguageContextType = {
  language: string;
  toggleLanguage: (language: string) => void;
};

export type LanguageProviderProps = {
  children: ReactNode;
};
