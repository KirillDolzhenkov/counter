import {combineReducers, createStore} from "redux";
import {AppReducer} from "./appReducer";

//types:
export type AppStateType = ReturnType<typeof rootReducer>
export type storeType = typeof  store;

//store:
const rootReducer = combineReducers(AppReducer);
const store = createStore(rootReducer);

export {
    store
}