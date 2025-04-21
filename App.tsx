import React, { useContext } from "react";

import AppContainer from "./src/navigation";
import { LanguageProvider } from "./src/translations/LanguageContext";
import { LanguageContext } from "./src/translations/LanguageContext";

export default function App() {
  const context = useContext(LanguageContext);
  console.log(`App # language ${context?.language}`);
  return (
    <LanguageProvider>
      <AppContainer currentLanguage={context?.language} />
    </LanguageProvider>
  );
}
