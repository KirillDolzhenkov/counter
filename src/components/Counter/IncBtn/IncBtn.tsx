import React from "react";
import style from './IncBtn.module.css';

//types:
type IncBtnPropsType = {
    addValue: () => void
    count: number
    maxValue: number
    editMode: boolean
}

//functional component:
const IncBtn: React.FC<IncBtnPropsType> = (props) => {

    const onClickHandler = () => {
        props.addValue();
    }
    const styleBtnValue = props.count === props.maxValue || props.editMode ? style.disable : style.IncBtn

    return (
        <>
            <span>
                <button
                    className={styleBtnValue}
                    disabled={props.count === props.maxValue || props.editMode}
                    onClick={onClickHandler}
                >Inc</button>
            </span>
        </>
    )
}

export {
    IncBtn
}