import React from "react";

import "../../style/Display.scss"

//types:
type DisplayPropsType = {
    countValue: number
    maxCountValue: number
}

//functional component:
const Display: React.FC<DisplayPropsType> = (props) => {
    const {
        countValue,
        maxCountValue,
    } = props;

    const inputClassName = countValue !== maxCountValue
        ? `display regularValue`
        : `display maxValue`;

    return (
        <>
            <input
                type="text"
                className={inputClassName}
                value={countValue}
            />
        </>
    );
}

export {
    Display
}