import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";



function App() {
    const [startValue, setStartValue] = useState<number>(0)
    const [displayValue, setDisplayValue] = useState<number>(startValue)



    const AddValue = () => {
        setDisplayValue(displayValue + 1);
    }

    const ResetValue = () => {
        setDisplayValue(0);
    }
    const SetStartValue = (value: number) => {
        setDisplayValue(value)
    }
/*    const SetInputValue = (value: number) => {

    }*/
    /*let onDisplay = displayValue;*/

    return (
        <div className="App">
            <Settings
                setStartValue={SetStartValue}

            />

            <Counter
                /*onDisplay={onDisplay}*/
                onDisplay={displayValue}
                addValue={AddValue}
                resetValue={ResetValue}

            />
        </div>
    );
}

export default App;
