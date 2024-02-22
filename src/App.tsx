import React, {useReducer, useState} from 'react';
import './App.css';
import {Display} from "./components/Display/Display";
import {ControlPanel} from "./components/ControlPanel/ControlPanel";
import {addCurrentValueAC, CounterStateType, CountReducer, resetCurrentValueAC} from "./reducers/CountReducer";
import {Settings} from "./components/Settings/Settings";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType, store} from "./store/store";
import {SettingsStateType} from "./reducers/SettingsReducer";

export type InitialStateType = {
    currentValue: number
    minValue: number
    maxValue: number
}

function App() {

    /*const [initialState, dispatch] = useReducer(CountReducer,{
        currentValue: 0,
        minValue: 0,
        maxValue: 5,
    });*/

    const dispatch = useDispatch();
    const counterData = useSelector<RootReducerType, CounterStateType>(
        (state) => state.Counter);
    const SettingsData = useSelector<RootReducerType, SettingsStateType>(
        (state) => state.Settings);

    /**Локальные состояния: */
    const [error, setError] = useState<string | null>("");
    const [isOpenSettings, setIsOpenSettings] = useState<boolean>(false);


    /**Функции: */
    const incValue = () => {
        dispatch(addCurrentValueAC())
       /* setCurrentValue(currentValue + 1);*/
    }

    const resetValue = () => {
        dispatch(resetCurrentValueAC(SettingsData.minValue));
    }

    const checkError = () => {
        /*const maxLimit = initialState.maxValue - 1;

        if (initialState.currentValue >= maxLimit) {

        }*/
    }

    const onChangeWindowHandler = () => {
        setIsOpenSettings(!isOpenSettings);
    }

    return (
        <div className="App">

            <div className="app-body">
                {
                    isOpenSettings
                        ? <Settings
                            changeWindow={onChangeWindowHandler}
                        />

                        : <div className="counter">
                            <Display
                                initialState={counterData}
                                error={error}
                            />

                            <ControlPanel
                                initialState={counterData}
                                incValue={incValue}
                                resetValue={resetValue}
                                checkError={checkError}
                                /*setError={()=>{}}*/
                                changeWindow={onChangeWindowHandler}
                            />
                        </div>
                }
            </div>
        </div>
    );
}

export default App;
