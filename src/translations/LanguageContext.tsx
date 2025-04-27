import React, { createContext, useState, useEffect } from "react";
import { i18n } from "../translations/translations";
import { LanguageContextType, LanguageProviderProps } from "../data/AppType";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KEY_LANGUAGE } from "../data/constants";

export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  toggleLanguage: () => {},
});

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<string>("en");

  const toggleLanguage = (language: string) => {
    setLanguage(language);
  };

  async function setupLanguage() {
    const config = await AsyncStorage.getItem(KEY_LANGUAGE);
    i18n.enableFallback = true;
    try {
      const current = config;
      if (current !== null) {
        i18n.locale = current;
      } else {
        i18n.locale = "en";
      }
    } catch (e) {
      console.warn(e);
      i18n.locale = "en";
    }
  }

  useEffect(() => {
    setupLanguage();
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        toggleLanguage,
        language,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
