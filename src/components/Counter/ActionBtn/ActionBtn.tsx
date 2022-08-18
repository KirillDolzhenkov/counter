import React from "react";

import styles from "./ActionBtn.module.css";

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
    maxCountValue: number
}


//functional component:
const ActionBtn: React.FC<ActionBtnPropsType> = (props) => {
    const {
        btnName,
        countValue,
        actionFn,
        maxCountValue,
    } = props;

    const onClickHandler = () => {
        actionFn();
    }
    const btnClassName = countValue === maxCountValue
        ? styles.disableActionBtn
        : styles.enableActionBtn

    return (
        <>
            <button
                className={btnClassName}
                onClick={onClickHandler}
                disabled={countValue === maxCountValue}
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
