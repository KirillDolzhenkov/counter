import {combineReducers, legacy_createStore} from "redux";
import {CountReducer} from "../reducers/CountReducer";
import {SettingsReducer} from "../reducers/SettingsReducer";

export type RootReducerType = ReturnType<typeof RootReducer>

const RootReducer = combineReducers({
    counter: CountReducer,
    settings: SettingsReducer
});

export const store = legacy_createStore(RootReducer);