import React from "react";
import './Reset.css';

type ResetBtnPropsType = {
    resetValue: () => void
    onDisplay: number
}

export const ResetBtn: React.FC<ResetBtnPropsType> = (props) => {
    const onClickHandler = ()=>{props.resetValue()}
    return (
        <>
            <span>
                <button
                    className={'ResetBtn'}
                    disabled={props.onDisplay === 0}
                    onClick={onClickHandler}
                >Reset</button>
            </span>
        </>
    )
}