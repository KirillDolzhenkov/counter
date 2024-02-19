import {ACTION_TYPE} from "../constants/constants";

export type initialStateType = {
    currentValue: number
    minValue: number
    maxValue: number
}

type SettingsActionType = ReturnType<typeof setStartValuesAC> | ReturnType<typeof setMaxValuesAC>

/*const initialTestState: initialStateType = {
    currentValue: 0,
    minValue: 0,
    maxValue: 5
};*/

export const SettingsReducer = (state: initialStateType, action: SettingsActionType): initialStateType => {
    switch (action.type) {
        case ACTION_TYPE.SETTINGS.SET_MIN_VALUE: {
            return {...state, minValue: action.payload.value, currentValue: action.payload.value};
        }
        case ACTION_TYPE.SETTINGS.SET_MAX_VALUE: {
            return {...state, maxValue: action.payload.value};
        }
        default: return state;
    }
}

export const setStartValuesAC = (value: number) => {
    return {type: ACTION_TYPE.SETTINGS.SET_MIN_VALUE, payload:{value}} as const
}
export const setMaxValuesAC = (value: number) => {
    return {type: ACTION_TYPE.SETTINGS.SET_MAX_VALUE, payload:{value}} as const
}
