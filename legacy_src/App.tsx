import React, {useReducer, useState} from 'react';

import "./styles/Counter.scss"
import {Display} from "./components/Display/Display";
import {Button} from "./components/Button/Button";
import {Settings} from "./components/Settings/Settings";
import {addValueAC, AppReducer, resetValueAC, setMaxValuesAC, setStartValuesAC} from "./redux/appReducer";


export const App: React.FC = () => {
    //initialState
    const [counter, dispatchCounter] = useReducer(AppReducer, {
        "startValue": 0,
        "maxValue": 1,
        "currentValue": 0
    });

    //localState
    const [openSettings, setOpenSettings] = useState(false);

    //styles
    const settingsClasName = `overlay animated ${openSettings ? "show" : ""}`;
    const isIncDisable = counter.currentValue >= counter.maxValue;
    const isResetDisable = counter.currentValue === counter.startValue;
    const isErrorDisplay = counter.currentValue >= counter.maxValue;

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
                            isEditable={false}
                            value={counter.currentValue}
                            isError={isErrorDisplay}
                            className={"display"}
                        />
                    </div>
                    <div className={"btnBar"}>
                        <Button
                            name={"Inc"}
                            className={"Inc"}
                            callback={addValue}
                            isDisable={isIncDisable}
                        />
                        <Button
                            name={"Reset"}
                            className={"Reset"}
                            callback={resetValue}
                            isDisable={isResetDisable}
                        />
                        <Button
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
