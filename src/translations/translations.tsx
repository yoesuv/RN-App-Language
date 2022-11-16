import { I18n } from 'i18n-js';

import { en } from './en';
import { id } from './id';

const translations = {
    en: en,
    id: id,
}

export const i18n = new I18n(translations);