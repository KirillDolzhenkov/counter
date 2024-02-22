import {ACTION_TYPE} from "../constants/constants";
import {resetCurrentValueAC} from "./CountReducer";

export type SettingsStateType = {
    minValue: number
    maxValue: number
}

type SettingsActionType = ReturnType<typeof setMinValuesAC>
    | ReturnType<typeof setMaxValuesAC>
    |ReturnType<typeof resetCurrentValueAC>

const initialTestState: SettingsStateType = {
    minValue: 0,
    maxValue: 5
};

export const SettingsReducer = (state: SettingsStateType = initialTestState, action: SettingsActionType): SettingsStateType => {
    switch (action.type) {
        case ACTION_TYPE.SETTINGS.SET_MIN_VALUE: {
            return {
                ...state,
                    minValue: action.payload.value,
            };
        }
        case ACTION_TYPE.SETTINGS.SET_MAX_VALUE: {
            return {
                ...state,
                    maxValue: action.payload.value
            };
        }
        default: return state;
    }
}

export const setMinValuesAC = (value: number) => {
    return {
        type: ACTION_TYPE.SETTINGS.SET_MIN_VALUE,
        payload: {
            value
        }
    } as const
}
export const setMaxValuesAC = (value: number) => {
    return {
        type: ACTION_TYPE.SETTINGS.SET_MAX_VALUE,
        payload: {
            value
        }
    } as const
}
