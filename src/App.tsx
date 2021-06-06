import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";



function App() {
    /*const [startValue, setStartValue] = useState<number>(0)*/


    const [maxValue, setMaxValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)


    const [count, setCount] = useState<number>(0)





    const addValue = () => {
        setCount(count + 1);
    }

    const resetValue = () => {
        setCount(startValue);
    }

    const addMaxValue = (value: number) => {
        setMaxValue(value)
    }

    const addStartValue = (value: number) => {
        setStartValue(value)
        setCount(startValue)
    }


    return (
        <div className="App">
            <Settings
                addStartValue={addStartValue}
                addMaxValue={addMaxValue}
                startValue={startValue}
                maxValue={maxValue}
            />

            <Counter
                count={count}
                addValue={addValue}
                resetValue={resetValue}
                maxValue={maxValue}
            />
        </div>
    );
}

export default App;
