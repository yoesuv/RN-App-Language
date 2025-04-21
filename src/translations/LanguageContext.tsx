import React, { createContext, useState, ReactNode } from "react";

type LanguageContextType = {
  language: string;
  toggleLanguage: () => void;
};

export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  toggleLanguage: () => {},
});

type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<string>("en");

  const toggleLanguage = () => {
    console.log(`LanguageContext # toggleLanguage ${language}`);
    setLanguage((prevLang) => (prevLang === "en" ? "id" : "en"));
  };

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
