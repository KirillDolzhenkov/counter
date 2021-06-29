import React from "react";
import styles from './Reset.module.css';

type ResetBtnPropsType = {
    resetValue: () => void
    count: number
}

export const ResetBtn: React.FC<ResetBtnPropsType> = (props) => {
    const onClickHandler = ()=>{props.resetValue()}
    const styleBtnValue = props.count === 0 ? styles.ResetBtn : styles.disable
    return (
        <>
            <span>
                <button
                    className={styleBtnValue}
                    disabled={props.count === 0}
                    onClick={onClickHandler}
                >Reset</button>
            </span>
        </>
    )
}