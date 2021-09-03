import {AppAT} from "./store";

//app reducer:
export const AppReducer = (state: any, action: AppAT) => {
    switch (action.type) {
        case "firstAction":{
            return state;
        }
        case "secondAction": {
            return state;
        }
        default: return state;
    }
}

//action creators:
export const firstAC = () => {
    return {type: "firstAction"} as const
}
export const secondAC = () => {
    return {type: "secondAction"} as const
}
