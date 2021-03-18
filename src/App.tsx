import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";

function App() {

    let [displayValue, setDisplayValue] = useState(0)

    const AddValue = () => {
        setDisplayValue(displayValue + 1);
    }

    const ResetValue = () => {
        setDisplayValue(0);
    }

    let onDisplay = displayValue;

    return (
        <div className="App">
            <Counter
                onDisplay={onDisplay}
                addValue={AddValue}
                resetValue={ResetValue}
            />
        </div>
    );
}

export default App;
