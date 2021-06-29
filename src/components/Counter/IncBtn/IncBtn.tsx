import React from "react";
import syles from './IncBtn.module.css';

type IncBtnPropsType = {
    addValue: () => void
    count: number
    maxValue: number
}

export const IncBtn: React.FC<IncBtnPropsType> = (props) => {
    const onClickHandler = () =>{props.addValue()}
    /*const styleBtnValue = props.onDisplay === 0 ? 'IncBtn' : 'DisabledIncBtnBtn'*/
    return (
        <>
            <span>
                <button
                    className={syles.IncBtn}
                    disabled={props.count === props.maxValue}
                    onClick={onClickHandler}
                >Inc</button>
            </span>
        </>
    )
}