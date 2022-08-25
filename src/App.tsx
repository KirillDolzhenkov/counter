import React, {useState} from 'react';

import "./App.scss"
import {Display} from "./components/Counter/Display/Display";
import {ActionBtn} from "./components/Counter/ActionBtn/ActionBtn";
import {Settings} from "./components/Settings/Settings";


//functional component:
const App: React.FC = () => {
    //local state:
    const [startValue, setStartValue] = useState(0);
    const [maxValue, setMaxValue] = useState(1);
    const [countValue, setCountValue] = useState(startValue);
    const [openSettings, setOpenSettings] = useState(false);

    //className for settings window:
    const settingsClasName = `overlay animated ${openSettings ? "show" : ""}`

    //open&close settings:
    const openWindow = () => {
        setOpenSettings(true);
    }
    const closeWindow = () => {
        setOpenSettings(false);
    }

    //counter onClickHandlers:
    const addValue = () => {
        setCountValue(countValue + 1);
        localStorage.setItem("counterValue", `${countValue + 1}`);
    }
    const resetValue = () => {
        setStartValue(startValue);
        setCountValue(startValue);
    }

    //callBacks:
    const changeStartValue = (newStartValue: number) => {
        setStartValue(newStartValue);
        setCountValue(newStartValue);
    }
    const changeMaxValue = (newMaxValue: number) => {
        setMaxValue(newMaxValue);
    }

    return (
        <div className="App">
            {
                !openSettings && <div className="CounterBody">
                    <div className="Display">
                        <Display
                            countValue={countValue}
                            maxCountValue={maxValue}
                        />
                    </div>
                    <div className={"BtnArea"}>
                        <ActionBtn
                            btnName={"Inc"}
                            countValue={countValue}
                            actionFn={addValue}
                            borderValue={maxValue}
                        />
                        <ActionBtn
                            btnName={"Reset"}
                            countValue={countValue}
                            actionFn={resetValue}
                            borderValue={startValue}
                        />
                        <button
                            className="Inc"
                            onClick={openWindow}
                        >Settings
                        </button>
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

export {
    App
}
