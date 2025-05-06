import AsyncStorage from "@react-native-async-storage/async-storage";
import { APP_LANGUAGE, KEY_LANGUAGE } from "../data/constants";

export async function saveLanguage(language: APP_LANGUAGE): Promise<void> {
    try {
        await AsyncStorage.setItem(KEY_LANGUAGE, language);
    } catch (error) {
        console.error('Error saving language:', error);
        throw error;
    }
}
    
      // Get language from AsyncStorage
export async function getLanguage(): Promise<APP_LANGUAGE | null> {
    try {
        const value = await AsyncStorage.getItem(KEY_LANGUAGE);
        if (value && Object.values(APP_LANGUAGE).includes(value as APP_LANGUAGE)) {
            return value as APP_LANGUAGE;
        }
        return APP_LANGUAGE.ENGLISH;
    } catch (error) {
        console.error('Error retrieving language:', error);
        return APP_LANGUAGE.ENGLISH;
    }
}
