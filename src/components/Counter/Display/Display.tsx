import React from "react";
import './Display.css'

type DisplayPropsType = {
    onDisplay: number
}

export const Display: React.FC<DisplayPropsType> = (props) => {
    const classNameValue = props.onDisplay === 5 ? 'redValue' : 'baseValue';
    return(
        <div>
            <h2>
                <input
                    value={props.onDisplay}
                    className={classNameValue}
                />
            </h2>
        </div>
    )
}