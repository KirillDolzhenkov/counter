import {ACTION_TYPE} from "../constants/constants";

export type initialStateType = {
    currentValue: number
    minValue: number
    maxValue: number
}

type CountType = ReturnType<typeof addValueAC> | ReturnType<typeof resetValueAC>

/*const initialTestState: initialStateType = {
    currentValue: 0,
    minValue: 0,
    maxValue: 5
};*/

export const CountReducer = (state: initialStateType, action: CountType): initialStateType => {
    switch (action.type) {
        case ACTION_TYPE.COUNT.INC_VALUE: {
            return {...state, currentValue: state.currentValue + 1};
        }
        case ACTION_TYPE.COUNT.RESET_VALUE: {
            return {...state, currentValue: state.minValue};
        }
        default: return state;
    }
}

export const addValueAC = () => {
    return {type: ACTION_TYPE.COUNT.INC_VALUE} as const
}
export const resetValueAC = () => {
    return {type: ACTION_TYPE.COUNT.RESET_VALUE} as const
}
