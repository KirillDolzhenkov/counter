import React, {useReducer, useState} from 'react';

import "./style/Counter.scss"
import {Display} from "./components/Display/Display";
import {ActionBtn} from "./components/ActionBtn/ActionBtn";
import {Settings} from "./components/Settings/Settings";
import {addValueAC, AppReducer, resetValueAC, setMaxValuesAC, setStartValuesAC} from "./redux/appReducer";


export const App: React.FC = () => {
    //initialState
    const initialTestState = {"startValue": 0, "maxValue": 1, "currentValue": 0}
    const [counter, dispatchCounter] = useReducer(AppReducer, initialTestState);

    //localState
    const [openSettings, setOpenSettings] = useState(false);

    //styles
    const settingsClasName = `overlay animated ${openSettings ? "show" : ""}`;
    const isIncDisable = counter.currentValue >= counter.maxValue;
    const isResetDisable = counter.currentValue === counter.startValue;
    const isError = counter.currentValue >= counter.maxValue;

    //open&close settings
    const openWindow = () => {
        setOpenSettings(true);
    }
    const closeWindow = () => {
        setOpenSettings(false);
    }

    //counter fns
    const addValue = () => {
        dispatchCounter(addValueAC());
    }
    const resetValue = () => {
        dispatchCounter(resetValueAC());
    }
    //onChangeHandlers
    const onCurrentValueHandler = (value: number) => {
        dispatchCounter(setStartValuesAC(value));
    }

    //settings callbacks
    const changeStartValue = (newStartValue: number) => {
        dispatchCounter(setStartValuesAC(newStartValue));
    }
    const changeMaxValue = (newMaxValue: number) => {
        dispatchCounter(setMaxValuesAC(newMaxValue));
    }

    return (
        <div className="app">
            {
                !openSettings && <div className="counterBody">
                    <div className="displayArea">
                        <Display
                            value={counter.currentValue}
                            isError={isError}
                            className={"display"}
                            callback={onCurrentValueHandler} //!!!
                        />
                    </div>
                    <div className={"btnBar"}>
                        <ActionBtn
                            name={"Inc"}
                            className={"Inc"}
                            callback={addValue}
                            isDisable={isIncDisable}
                        />
                        <ActionBtn
                            name={"Reset"}
                            className={"Reset"}
                            callback={resetValue}
                            isDisable={isResetDisable}
                        />
                        <ActionBtn
                            name={"Settings"}
                            className={"Inc"}
                            callback={openWindow}
                        />
                    </div>
                </div>
            }
            <div className={settingsClasName}>
                <div className="modal">
                    <svg onClick={closeWindow} height="200" viewBox="0 0 200 200" width="200">
                        <title/>
                        <path
                            d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"/>
                    </svg>
                    <Settings
                        changeStartValue={changeStartValue}
                        changeMaxValue={changeMaxValue}
                        closeWindow={closeWindow}
                    />
                </div>
            </div>
        </div>
    );
}
