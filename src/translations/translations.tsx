import { en } from "./en";
import { id } from "./id";
import { I18n } from "i18n-js";

const translations = {
  en: en,
  id: id,
};

export const i18n = new I18n(translations);
