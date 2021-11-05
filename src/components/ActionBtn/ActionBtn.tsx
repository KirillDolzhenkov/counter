import React from "react";

import style from './ActionBtn.module.css';

//types:
type ActionBtnPropsType = {
    actionFn: () => void
    count: number
    value: number
    editMode: boolean
    title: string
}


//functional component:
const ActionBtn: React.FC<ActionBtnPropsType> = (props) => {

    const onClickHandler = () => {
        props.actionFn();
    }

    const styleBtnValue = props.count === props.value || props.editMode ? style.disableActionBtn : style.enableActionBtn

    return (
        <div>
            <button
                className={styleBtnValue}
                disabled={props.count === props.value || props.editMode}
                onClick={onClickHandler}
            >{props.title}
            </button>
        </div>
    )
}

export {
    ActionBtn
}