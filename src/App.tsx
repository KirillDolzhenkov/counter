import React, {useState} from 'react';

import "./App.scss"
import {Display} from "./components/Counter/Display/Display";
import {ActionBtn} from "./components/Counter/ActionBtn/ActionBtn";


//functional component:
const App: React.FC = () => {
    const [countValue, setCountValue] = useState(0);
    const [openSettings, setOpenSettings] = useState(false);

    const openWindow =() =>{
        setOpenSettings(true);
    }
    const closeWindow =() =>{
        setOpenSettings(false);
    }

    const addValue = () => {
        setCountValue(countValue + 1);
    }
    const resetValue = () => {
        setCountValue(0);
    }


    return (
        <div className="App">

            {
                openSettings
                    ? <div className="overlay">
                        <div className="modal">
                            <svg onClick={closeWindow} height="200" viewBox="0 0 200 200" width="200">
                                <title/>
                                <path
                                    d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"/>
                            </svg>
                            in progress...

                        </div>
                    </div>

                    : <div className="CounterBody">
                        <div className="Display">
                            <Display
                                countValue={countValue}
                                maxCountValue={5}
                            />
                        </div>
                        <div className={"BtnArea"}>
                            <ActionBtn
                                btnName={"Inc"}
                                countValue={countValue}
                                actionFn={addValue}
                                maxCountValue={5}
                            />
                            <ActionBtn
                                btnName={"Reset"}
                                countValue={countValue}
                                actionFn={resetValue}
                                maxCountValue={0}
                            />
                            <button
                                className="Inc"
                                onClick={openWindow}
                            >Settings</button>
                        </div>
                    </div>
            }
        </div>
    );
}



/*
    //settings:
    const [maxValue, setMaxValue] = useState<number>(1);
    const [startValue, setStartValue] = useState<number>(0);

    //display:
    const [count, setCount] = useState<number>(0);

    //editMode:
    const [editMode, setEditMode] = useState<boolean>(false);

    //error:
    const [error, setError] = useState<boolean>(false);


    //callBacks:
    const addValue = () => {
        /!*setCount(count + 1);*!/
        addValueAC()
    }

    const resetValue = () => {
        setCount(startValue);
    }

    const addMaxValue = (value: number) => {
        if (value <= startValue || value < 0) {
            setError(true);
        } else {
            setError(false);
        }
        setMaxValue(value);
    }

    const addStartValue = (value: number) => {
        if (value >= maxValue || value < 0) {
            setError(true)
        } else {
            setError(false);
        }
        setStartValue(value);
        setCount(startValue);
    }

    const changeEditMode = (value: boolean) => {
        setEditMode(value);
    }


    return (
        <div className={style.app}>
            <Settings
                addStartValue={addStartValue}
                addMaxValue={addMaxValue}
                startValue={startValue}
                maxValue={maxValue}
                changeEditMode={changeEditMode}
                error={error}
            />

            <Counter
                count={count}
                addValue={addValue}
                resetValue={resetValue}
                maxValue={maxValue}
                startValue={startValue}
                editMode={editMode}
            />
        </div>
    );
}*/

export {
    App
}
