
//types:
export type initialStateType = {
    count: number
}

export type AppAT = ReturnType<typeof addValueAC>
    | ReturnType<typeof resetValueAC>
    | ReturnType<typeof setStartValuesAC>

const initialState: initialStateType = {count: 0};

//app reducer:
export const AppReducer = (state: initialStateType = initialState, action: AppAT) => {
    switch (action.type) {
        case "addValue":{
            const stateCopy = {...state};
            return stateCopy.count + 1;
        }
        case "resetValue": {
            const stateCopy = {...state};
            return stateCopy.count = 0;
        }
        case "setStartValues": {
            const stateCopy = {...state};
            return stateCopy.count = action.value;
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
export const setStartValuesAC = (value: number) => {
    return {type: "setStartValues", value} as const
}
