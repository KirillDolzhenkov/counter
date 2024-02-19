import React, {useReducer, useState} from 'react';
import './App.css';
import {Display} from "./components/Display/Display";
import {ControlPanel} from "./components/ControlPanel/ControlPanel";
import {addValueAC, CountReducer, resetValueAC} from "./reducers/CountReducer";

export type InitialStateType = {
    currentValue: number
    minValue: number
    maxValue: number
}

function App() {

    /**Локальные состояния: */
    const [initialState, dispatch] = useReducer(CountReducer,{
        currentValue: 0,
        minValue: 0,
        maxValue: 5,
    });

    const [error, setError] = useState<string | null>("");
    const [isOpenSettings, setIsOpenSettings] = useState<boolean>(false);

    /**Функции: */
    const incValue = () => {
        dispatch(addValueAC())
    }

    const resetValue = () => {
        dispatch(resetValueAC());
    }

    const checkError = () => {
        /*const maxLimit = initialState.maxValue - 1;

        if (initialState.currentValue >= maxLimit) {

        }*/
    }

    const changeWindow = (value: boolean) => {
        setIsOpenSettings(value);
    }

    return (
        <div className="App">

            <div className="app-body">
                {
                    isOpenSettings
                        ? <>
                            <div className={'setField'}>

                                <div className={'inputField'}>
                                   <div style={{display: "flex", width: "100%"}}>
                                       <div>
                                           <span className={'setMax'}>maximum</span>
                                           <input/>
                                       </div>
                                       <div>
                                           <button className="button button-primary">+</button>
                                           <button className="button button-primary">-</button>
                                       </div>
                                   </div>

                                    <div style={{display: "flex", width: "100%"}}>
                                        <div>
                                            <span className={'setMin'}>minimum</span>
                                            <input/>
                                        </div>

                                        <div>
                                            <button className="button button-primary">+</button>
                                            <button className="button button-primary">-</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="control-panel settings">
                                    <button
                                        className="button button-primary"
                                        onClick={() => changeWindow(false)}
                                    >save</button>
                                </div>
                            </div>
                        </>
                        : <div className="counter">
                            <Display initialState={initialState} error={error}/>

                            <ControlPanel
                                initialState={initialState}
                                incValue={incValue}
                                resetValue={resetValue}
                                checkError={checkError}
                                /*setError={()=>{}}*/
                                changeWindow={changeWindow}
                            />

                        </div>
                }

            </div>
        </div>
    );
}

export default App;
