import React from "react";
import './IncBtn.css';

type IncBtnPropsType = {
    addValue: () => void
    onDisplay: number
}

export const IncBtn: React.FC<IncBtnPropsType> = (props) => {
    const onClickHandler = () =>{props.addValue()}
    return (
        <>
            <span>
                <button
                    className={'IncBtn'}
                    disabled={props.onDisplay === 5}
                    onClick={onClickHandler}
                >Inc</button>
            </span>
        </>
    )
}