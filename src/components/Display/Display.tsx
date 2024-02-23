import React from 'react';

type DisplayProps = {
    currentValue: number
    error: boolean
}

export const Display = ({currentValue, error}: DisplayProps) => {
    const displayStyle = error ? "error" : "";

    return (
        <div className="display">
            <p className={displayStyle}>{currentValue}</p>
        </div>
    );
};