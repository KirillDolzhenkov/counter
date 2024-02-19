import React from 'react';
import {InitialStateType} from "../../App";

type DisplayProps = {
    initialState: InitialStateType
    error: string | null
}

export const Display: React.FC<DisplayProps> = ({initialState,error}) => {

    const displayStyle = !!error ? "error" : "";

    return (
        <div className="display">
            <p className={displayStyle}>{initialState.currentValue}</p>
        </div>
    );
};