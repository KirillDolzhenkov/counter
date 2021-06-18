import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";



function App() {

    //settings:
    const [maxValue, setMaxValue] = useState<number>(0);
    const [startValue, setStartValue] = useState<number>(0);

    //display:
    const [count, setCount] = useState<number>(0);

    //editMode:
    const [editMode, setEditMode] = useState<boolean>(false);


    //localStorage:

 /*   useEffect(() => {
        setStartStorageValue();
    },[startValue]);

    const setStartStorageValue = () => {
        localStorage.setItem("counterValue", JSON.stringify(startValue));
    }*/

/*    const getLocalStorageValue = () => {
        let storageValue = localStorage.getItem("counterValue");
        if(storageValue){
            setLocalStValue(JSON.parse(storageValue));
        }
    }*/

    //callBacks:
    const addValue = () => {
        setCount(count + 1);
    }
    const resetValue = () => {
        setCount(startValue);
    }
    const addMaxValue = (value: number) => {
        setMaxValue(value);
    }
    const addStartValue = (value: number) => {
        setStartValue(value);
        setCount(startValue);
    }
    const changeEditMode = (value: boolean) => {
        setEditMode(value);
    }

    return (
        <div className="App">
            <Settings
                addStartValue={addStartValue}
                addMaxValue={addMaxValue}
                startValue={startValue}
                maxValue={maxValue}
                changeEditMode={changeEditMode}
            />

            <Counter
                count={count}
                addValue={addValue}
                resetValue={resetValue}
                maxValue={maxValue}
                editMode={editMode}
            />
        </div>
    );
}

export default App;
