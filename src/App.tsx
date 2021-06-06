import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";



function App() {
    /*const [startValue, setStartValue] = useState<number>(0)*/


    /*const [maxValue, setMaxValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)*/

    const [displayValue, setDisplayValue] = useState<number>(0)





    const addValue = () => {
        setDisplayValue(displayValue + 1);
    }

    const resetValue = () => {
        setDisplayValue(0);
    }
    const addMaxValue = (value: number) => {
       /* setMaxValue(value)*/
    }
    const addStartValue = (value: number) => {
        setDisplayValue(value)
    }


    return (
        <div className="App">
            <Settings
                addStartValue={addStartValue}
                addMaxValue={addMaxValue}
            />

            <Counter
                onDisplay={displayValue}
                addValue={addValue}
                resetValue={resetValue}
            />
        </div>
    );
}

export default App;
