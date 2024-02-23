import React, {useEffect} from 'react';


type ControlPanelProps = {
    currentValue: number
    minValue: number
    maxValue: number

    incValue: () => void
    resetValue: () => void
    changeWindow: () => void
    setError: (error: boolean) => void
}

export const ControlPanel= (
    {
        currentValue,
        minValue,
        maxValue,
        incValue,
        resetValue,
        changeWindow,
        setError
    } : ControlPanelProps
) => {

    const isIncActive = currentValue >= maxValue;
    const isResetActive = currentValue === minValue;
    /*const isErrorActive = currentValue >= maxValue;*/

    useEffect(()=> {
        if (currentValue >= maxValue) {
            setError(true);
        }
    },[currentValue]);

    const onIncValueHandler = () => {
        incValue();
    }

    const onResetHandler = () => {
        resetValue();
        setError(false);
    }

    const onOpenCounterHandler = () => {
        changeWindow();
    }

    return (
        <div className="control-panel">
            <button
                className="button button-primary"
                disabled={isIncActive}
                onClick={onIncValueHandler}
            >inc</button>
            <button
                className="button button-secondary"
                disabled={isResetActive}
                onClick={onResetHandler}
            >reset</button>
            <button
                className="button button-primary"
                onClick={onOpenCounterHandler}
            >settings</button>
        </div>
    );
};
