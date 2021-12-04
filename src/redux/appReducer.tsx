
//types:
export type AppAT = ReturnType<typeof addValueAC>
    | ReturnType<typeof resetValueAC>
    | ReturnType<typeof setStartValuesAC>

//app reducer:
export const AppReducer = (state: any, action: AppAT) => {
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
export const addValueAC = () => {
    return {type: "addValue"} as const
}
export const resetValueAC = () => {
    return {type: "resetValue"} as const
}
export const setStartValuesAC = () => {
    return {type: "setStartValues"} as const
}
