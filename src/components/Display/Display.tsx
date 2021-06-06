import React from "react";
import './Display.css'

type DisplayPropsType = {
    count: number
    maxValue: number
}

export const Display: React.FC<DisplayPropsType> = (props) => {
    const classNameValue = props.count === props.maxValue ? 'redValue' : 'baseValue';
    return(
        <div>
            <h2>
                <input
                    value={props.count}
                    className={classNameValue}
                />
            </h2>
        </div>
    )
}