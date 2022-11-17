export const MAIN_APP_INIT = "MAIN_APP_INIT";

interface mainAppInit {
    type: typeof MAIN_APP_INIT;
    language: string;
}

export type MainActionType = mainAppInit;