import React from "react";
import './Display.css'

type DisplayPropsType = {
    count: number
    maxValue: number
    editMode: boolean
}

export const Display: React.FC<DisplayPropsType> = (props) => {

    const classNamePropsValue = props.count === props.maxValue ? `baseValue redValue` : 'baseValue';
    const inputValue = props.editMode? `please enter values and press "Set" button` : props.count;
    const classNameValue = props.editMode? `baseValue information` : classNamePropsValue;

    return(
        <div>
            <h2>
                <input
                    value={inputValue}
                    className={classNameValue}
                />
            </h2>
        </div>
    )
}