import React, { createContext, useState, useEffect } from "react";
import { LanguageContextType, LanguageProviderProps } from "../data/app-type";
import { APP_LANGUAGE } from "../data/constants";
import { i18n } from "./translations";
import { getLanguage } from "./language-store";

export const LanguageContext = createContext<LanguageContextType>({
  language: APP_LANGUAGE.ENGLISH,
  toggleLanguage: () => {},
  translate: (key: string) => key,
});

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<APP_LANGUAGE>(APP_LANGUAGE.ENGLISH);

  const toggleLanguage = (language: APP_LANGUAGE) => {
    i18n.locale = language;
    setLanguage(language);
  };

  async function setupLanguage() {
    i18n.enableFallback = true;
    try {
      const current = await getLanguage();
      if (current !== null) {
        setLanguage(current);
        i18n.locale = current;
      } else {
        setLanguage(APP_LANGUAGE.ENGLISH);
        i18n.locale = APP_LANGUAGE.ENGLISH;
      }
    } catch (e) {
      console.warn(e);
      setLanguage(APP_LANGUAGE.ENGLISH);
      i18n.locale = APP_LANGUAGE.ENGLISH;
    }
  }

  const translate = (key: string) => {
    return i18n.t(key);
  };

  useEffect(() => {
    setupLanguage();
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        toggleLanguage,
        language,
        translate,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = React.useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
