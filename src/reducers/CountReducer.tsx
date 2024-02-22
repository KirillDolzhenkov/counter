import {ACTION_TYPE} from "../constants/constants";

export type CounterStateType = {
    currentValue: number
}

type CountType = ReturnType<typeof addCurrentValueAC> | ReturnType<typeof resetCurrentValueAC>

const initialTestState: CounterStateType = {
    currentValue: 0,
};

export const CountReducer = (state: CounterStateType = initialTestState, action: CountType): CounterStateType => {
    switch (action.type) {
        case ACTION_TYPE.COUNT.INC_CURRENT_VALUE: {
            return {...state, currentValue: state.currentValue + 1};
        }
        case ACTION_TYPE.COUNT.RESET_CURRENT_VALUE: {
            return {...state, currentValue: action.payload.value};
        }
        default: return state;
    }
}

export const addCurrentValueAC = () => {
    return {type: ACTION_TYPE.COUNT.INC_CURRENT_VALUE} as const
}
export const resetCurrentValueAC = (value: number) => {
    return {
        type: ACTION_TYPE.COUNT.RESET_CURRENT_VALUE,
        payload: {
            value
        }
    } as const
}
