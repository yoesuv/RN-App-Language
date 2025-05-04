import React, { createContext, useState, useEffect } from "react";
import { LanguageContextType, LanguageProviderProps } from "../data/app-type";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { I18n } from "i18n-js";
import { translations } from "./translations";
import { KEY_LANGUAGE } from "../data/constants";

const i18n = new I18n(translations);

export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  toggleLanguage: () => {},
  translate: (key: string) => key,
});

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<string>("en");

  const toggleLanguage = (language: string) => {
    i18n.locale = language;
    setLanguage(language);
  };

  async function setupLanguage() {
    i18n.enableFallback = true;
    const config = await AsyncStorage.getItem(KEY_LANGUAGE);
    try {
      const current = config;
      if (current !== null) {
        setLanguage(current);
        i18n.locale = current;
      } else {
        setLanguage("en");
        i18n.locale = "en";
      }
    } catch (e) {
      console.warn(e);
      setLanguage("en");
      i18n.locale = "en";
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
