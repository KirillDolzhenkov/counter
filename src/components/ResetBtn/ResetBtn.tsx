import React from "react";
import './Reset.css';

type ResetBtnPropsType = {
    resetValue: () => void
    count: number
}

export const ResetBtn: React.FC<ResetBtnPropsType> = (props) => {
    const onClickHandler = ()=>{props.resetValue()}
    /*const styleBtnValue = props.onDisplay === 0 ? 'ResetBtn' : 'DisabledResetBtn'*/
    return (
        <>
            <span>
                <button
                    className={'ResetBtn'}
                    disabled={props.count === 0}
                    onClick={onClickHandler}
                >Reset</button>
            </span>
        </>
    )
}