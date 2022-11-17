import { ActionCreator } from "redux";
import { MainActionType, MAIN_APP_INIT } from "../types";

export const mainAppInit: ActionCreator<MainActionType> = (language: string) => {
    return {
        type: MAIN_APP_INIT,
        language: language,
    }
}