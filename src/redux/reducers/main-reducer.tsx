import { MainActionType, MAIN_APP_INIT } from "../types"

interface MainState {
    language: string
}

const initialState: MainState = {
    language: 'en'
}

export function mainReducer(state= initialState, action: MainActionType): MainState {
    switch (action.type) {
        case MAIN_APP_INIT:
            return {
                ...state,
                language: action.language,
            }
        default:
            return {
                ...state,
            }
    }
} 