import React from "react";
import styles from './Reset.module.css';

//types:
type ResetBtnPropsType = {
    resetValue: () => void
    count: number
    startValue: number
    editMode: boolean
}

//functional component:
const ResetBtn: React.FC<ResetBtnPropsType> = (props) => {
    const onClickHandler = ()=>{props.resetValue()}
    const styleBtnValue = props.count === props.startValue || props.editMode? styles.disable : styles.ResetBtn
    return (
        <>
            <span>
                <button
                    className={styleBtnValue}
                    disabled={props.count === props.startValue || props.editMode}
                    onClick={onClickHandler}
                >Reset</button>
            </span>
        </>
    )
}

export {
    ResetBtn
}