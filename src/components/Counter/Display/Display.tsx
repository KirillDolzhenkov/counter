import React from "react";

import style from './Display.module.css'

//types:
type DisplayPropsType = {
    count: number
    maxValue: number
    editMode: boolean
}

//functional component:
const Display: React.FC<DisplayPropsType> = (props) => {

    const classNamePropsValue = props.count === props.maxValue ? `${style.baseValue} ${style.redValue}` : `${style.baseValue}`;
    const inputValue = props.editMode ? `please enter the values and press "Set" btn` : props.count;
    const classNameValue = props.editMode ? `${style.baseValue} ${style.information}` : classNamePropsValue;

    return (
        <div>
            <input
                value={inputValue}
                className={classNameValue}
            />
        </div>
    )
}

export {
    Display
}