import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActionCreator } from "redux";
import { KEY_LANGUAGE } from "../../data/constants";
import { MainActionType, MAIN_APP_INIT } from "../types";

const mainAppInit: ActionCreator<MainActionType> = (language: string) => {
    return {
        type: MAIN_APP_INIT,
        language: language,
    }
}

export function loadLanguage() {
    return async (dispatch: (arg0: MainActionType) => void) => {
        const current = await AsyncStorage.getItem(KEY_LANGUAGE);
        if (current !== null) {
            dispatch(mainAppInit(current));
        } else {
            dispatch(mainAppInit('en'));
        }
    }
}