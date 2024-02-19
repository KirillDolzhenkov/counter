import React from "react";

import "../../styles/Display.scss"

//types:
type DisplayPropsType = {
    value: number
    isEditable: boolean
    callback?: (value: number) => void
    className?: string
    isError?: boolean
}

//functional component:
export const Display: React.FC<DisplayPropsType> = (props) => {
    const {
        value,
        isEditable,
        callback = () => {},
        className = "",
        isError = false,
    } = props;

    const onchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(isEditable){
            const value = +e.currentTarget.value;
            callback(value);
        }
    }

    const displayClassName = isError ? `${className} error` : `${className}`;

    return (
        <input
            type="number"
            className={displayClassName}
            value={value}
            onChange={onchangeHandler}
        />
    )
}