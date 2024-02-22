import React from 'react';
import {InitialStateType} from "../../App";
import {ERROR} from "../../constants/constants";
import {CounterStateType} from "../../reducers/CountReducer";

type ControlPanelProps = {
    initialState: CounterStateType
    incValue: () => void
    resetValue: () => void
    checkError: () => void
    changeWindow: () => void
    /*setError: (error: string) => void*/
}

export const ControlPanel: React.FC<ControlPanelProps> = (
    {
        initialState,
        incValue,
        resetValue,
        checkError,
        changeWindow
        /*setError*/
    }
) => {

    const isIncActive = false/*initialState.currentValue >= initialState.maxValue;*/
    const isResetActive = false/*initialState.currentValue === initialState.minValue;*/
    const isErrorActive = false/*initialState.currentValue >= initialState.maxValue;*/

    const incHandler = () => {
        checkError();
        incValue();
    }

    const resetHandler = () => {
        resetValue();
        /*setError(ERROR.RESET_ERROR_VALUE);*/
    }

    const onOpenCounterHandler = () => {
        changeWindow();
    }


    return (
        <div className="control-panel">
            <button
                className="button button-primary"
                disabled={isIncActive}
                onClick={() => incHandler()}
            >inc</button>
            <button
                className="button button-secondary"
                disabled={isResetActive}
                onClick={() => resetHandler()}
            >reset</button>
            <button
                className="button button-primary"
                onClick={onOpenCounterHandler}
            >settings</button>
        </div>
    );
};
