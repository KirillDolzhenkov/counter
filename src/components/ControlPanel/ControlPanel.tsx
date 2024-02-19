import React from 'react';
import {InitialStateType} from "../../App";
import {ERROR} from "../../constants/constants";

type ControlPanelProps = {
    initialState: InitialStateType
    incValue: () => void
    resetValue: () => void
    checkError: () => void
    changeWindow: (value: boolean) => void
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

    const isIncActive = initialState.currentValue >= initialState.maxValue;
    const isResetActive = initialState.currentValue === initialState.minValue;
    const isErrorActive = initialState.currentValue >= initialState.maxValue;

    const incHandler = () => {
        checkError();
        incValue();
    }

    const resetHandler = () => {
        resetValue();
        /*setError(ERROR.RESET_ERROR_VALUE);*/
    }

    const openSettingsHandler = () => {
        changeWindow(true);
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
                onClick={() => openSettingsHandler()}
            >settings</button>
        </div>
    );
};
