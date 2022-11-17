import { ActionCreator } from "redux";
import { mainActionType, MAIN_APP_INIT } from "../types";

export const mainAppInit: ActionCreator<mainActionType> = () => {
    return {
        type: MAIN_APP_INIT
    }
}