import {combineReducers, createStore} from "redux";
import {AppReducer, firstAC, secondAC} from "./appReducer";

//types:
export type AppStateType = ReturnType<typeof rootReducer>
export type storeType = typeof  store;
export type AppAT = ReturnType<typeof firstAC> | ReturnType<typeof secondAC>

//store:
const rootReducer = combineReducers(AppReducer);
const store = createStore(rootReducer);

export {
    store
}