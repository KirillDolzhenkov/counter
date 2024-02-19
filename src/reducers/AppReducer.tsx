export type initialStateType = {
    currentValue: number
    minValue: number
    maxValue: number
}

export type AppActionType = ReturnType<typeof addValueAC>
    | ReturnType<typeof resetValueAC>
    | ReturnType<typeof setStartValuesAC>
    | ReturnType<typeof setMaxValuesAC>

const initialTestState: initialStateType = {
    currentValue: 0,
    minValue: 0,
    maxValue: 5
};


export const AppReducer = (state: initialStateType, action: AppActionType): initialStateType => {
    switch (action.type) {
        case "COUNTER/ADD_VALUE":{
            return {...state, currentValue: state.currentValue + 1};
        }
        case "COUNTER/RESET_VALUE": {
            return {...state, currentValue: state.minValue};
        }
        case "COUNTER/SET_START_VALUE": {
            return {...state, minValue: action.payload.value, currentValue: action.payload.value};
        }
        case "COUNTER/SET_MAX_VALUE": {
            return {...state, maxValue: action.payload.value};
        }
        default: return state;
    }
}


export const addValueAC = () => {
    return {type: "COUNTER/ADD_VALUE"} as const
}
export const resetValueAC = () => {
    return {type: "COUNTER/RESET_VALUE"} as const
}
export const setStartValuesAC = (value: number) => {
    return {type: "COUNTER/SET_START_VALUE", payload:{value}} as const
}
export const setMaxValuesAC = (value: number) => {
    return {type: "COUNTER/SET_MAX_VALUE", payload:{value}} as const
}
