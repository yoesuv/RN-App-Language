import React from "react";

import { AppNavigation } from "./src/navigation";
import { LanguageProvider } from "./src/translations/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <AppNavigation />
    </LanguageProvider>
  );
}
