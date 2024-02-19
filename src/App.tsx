import React, {useReducer, useState} from 'react';
import './App.css';
import {Display} from "./components/Display/Display";
import {ERROR} from "./constants/constants";
import {ControlPanel} from "./components/ControlPanel/ControlPanel";
import {addValueAC, AppReducer, resetValueAC} from "./reducers/AppReducer";

export type InitialStateType = {
    currentValue: number
    minValue: number
    maxValue: number
}

function App() {

    /**Локальные состояния: */
    const [initialState, dispatch] = useReducer(AppReducer,{
        currentValue: 0,
        minValue: 0,
        maxValue: 5,
    });

    const [error, setError] = useState<string | null>("");
    const [isOpenSettings, setIsOpenSettings] = useState<boolean>(false);


    /**Функции: */
    const incValue = () => {
        /*setInitialState({...initialState, currentValue: initialState.currentValue + 1});*/
        dispatch(addValueAC())
    }

    const resetValue = () => {
        /*setInitialState({...initialState, currentValue: initialState.minValue});*/
        dispatch(resetValueAC());
    }

    const checkError = () => {
        const maxLimit = initialState.maxValue - 1;

        if (initialState.currentValue >= maxLimit) {
            /*setError(ERROR.MAX_LIMIT_ERROR);*/
        }
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
                                           <button>+</button>
                                           <button>-</button>
                                       </div>
                                   </div>

                                    <div style={{display: "flex", width: "100%"}}>
                                        <div>
                                            <span className={'setMin'}>minimum</span>
                                            <input/>
                                        </div>

                                        <div>
                                            <button>+</button>
                                            <button>-</button>
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
