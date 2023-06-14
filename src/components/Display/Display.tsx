import React from "react";

import "../../style/Display.scss"

//types:
type DisplayPropsType = {
    value: number
    className?: string
    isError?: boolean
    callback: (value: number) => void
}

//functional component:
export const Display: React.FC<DisplayPropsType> = (props) => {
    const {
        value,
        callback,
        className = "",
        isError = false,
    } = props;

    const onchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = +e.currentTarget.value;
        callback(value);
    }

    const displayClassName = isError ? `${className} error` : `${className}`;

    return (
        <input
            type="number"
            className={displayClassName}
            value={value}
            onChange={onchangeHandler}
        />
    );
}