import { ReactNode } from "react";
import { APP_LANGUAGE } from "./constants";

export type LanguageContextType = {
  language: APP_LANGUAGE;
  toggleLanguage: (language: APP_LANGUAGE) => void;
  translate: (key: string) => string;
};

export type LanguageProviderProps = {
  children: ReactNode;
};
