import React from "react";

import "../../style/Buttons.scss"

//types:
type ActionBtnPropsType = {
    /*actionFn: () => void
    count: number
    value: number
    editMode: boolean
    title: string*/

    btnName: string
    countValue: number
    actionFn: () => void
    borderValue: number
}


//functional component:
const ActionBtn: React.FC<ActionBtnPropsType> = (props) => {
    const {
        btnName,
        countValue,
        actionFn,
        borderValue,
    } = props;

    //classNames for buttons:
    const btnClassName = countValue === borderValue
        ? `${btnName} disable`
        : `${btnName}`


    //onClickHandlers
    const onClickHandler = () => {
        actionFn();
    }


    return (
        <>
            <button
                className={btnClassName}
                onClick={onClickHandler}
                disabled={countValue === borderValue}
            >{btnName}</button>
        </>

    )

}

export {
    ActionBtn
}
/*

const onClickHandler = () => {
    props.actionFn();
}

const styleBtnValue = props.count === props.value || props.editMode
    ? style.disableActionBtn
    : style.enableActionBtn

return (
    <div>
        <button
            className={styleBtnValue}
            disabled={props.count === props.value || props.editMode}
            onClick={onClickHandler}
        >{props.title}
        </button>
    </div>
)*/
