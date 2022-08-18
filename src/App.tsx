import React, {useReducer, useState} from 'react';
import style from './App.module.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";
import {addValueAC} from "./redux/appReducer";


//functional component:
const App: React.FC = () => {
    const [countValue, setCountValue] = useState(0);

    const addValue = () => {
        setCountValue(countValue + 1);
    }
    const resetValue = () => {
        setCountValue(0);
    }

    return (
        <div className={style.app}>
            <Counter
                countValue={countValue}
                addValue={addValue}
                resetValue={resetValue}
            />
        </div>
    )

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
