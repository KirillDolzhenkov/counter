import React, {useState} from 'react';

import "./style/Counter.scss"
import {Display} from "./components/Display/Display";
import {ActionBtn} from "./components/ActionBtn/ActionBtn";
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
        //localStorage.setItem("counterValue", JSON.stringify(countValue + 1));
    }
    const resetValue = () => {
        setStartValue(startValue);
        setCountValue(startValue);
        //localStorage.removeItem("counterValue");
    }
    const testGetValueFromLS = () => {
        let valueAsString = localStorage.getItem("counterValue");
        if (valueAsString){
            let valueAsNumber = JSON.parse(valueAsString);
            setStartValue(valueAsNumber);
        }
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
        <div className="app">
            {
                !openSettings && <div className="counterBody">
                    <div className="displayArea">
                        <Display
                            countValue={countValue}
                            maxCountValue={maxValue}
                        />
                    </div>
                    <div className={"btnBar"}>
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
                        {/*<button
                            className="Inc"
                            onClick={testGetValueFromLS}
                        >testLS
                        </button>*/}
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
