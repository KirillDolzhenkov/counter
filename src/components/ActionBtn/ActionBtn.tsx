import React from "react";

import "../../style/Buttons.scss"

type ActionBtnPropsType = {
    name: string
    className?: string
    isDisable?: boolean
    callback: () => void
}

export const ActionBtn: React.FC<ActionBtnPropsType> = (props) => {
    const {
        name,
        className = "",
        isDisable = false,
        callback,
    } = props;

    //className
    const btnClassName = isDisable ? `${className} disable` : `${className}`;

    //onClickHandler
    const onClickHandler = () => {
        callback();
    }

    return (
        <button
            className={btnClassName}
            onClick={onClickHandler}
            disabled={isDisable}
        >{name}</button>
    )
}
