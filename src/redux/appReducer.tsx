import { AppStateType } from "./store";

//types:
export type AppAT = ReturnType<typeof addValueAC>
    | ReturnType<typeof resetValueAC>
    | ReturnType<typeof setStartValuesAC>

const initialState = [0];

//app reducer:
export const AppReducer = (state:any = initialState, action: AppAT) => {
    switch (action.type) {
        case "addValue":{
            return state;
        }
        case "resetValue": {
            return state;
        }
        case "setStartValues": {
            return state;
        }
        default: return state;
    }
}

//action creators:
export const addValueAC = (value: number) => {
    return {type: "addValue", value} as const
}
export const resetValueAC = () => {
    return {type: "resetValue"} as const
}
export const setStartValuesAC = () => {
    return {type: "setStartValues"} as const
}
