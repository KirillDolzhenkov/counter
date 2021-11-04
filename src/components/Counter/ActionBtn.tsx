import React from "react";

import styles from './ActionBtn.module.css';

//types:
type ActionBtnPropsType = {
    actionFn: () => void
    count: number
    value: number
    editMode: boolean
}

//functional component:
const ActionBtn: React.FC<ActionBtnPropsType> = (props) => {

    const onClickHandler = () => {
        props.actionFn();
    }

    const styleBtnValue = props.count === props.value || props.editMode ? styles.disableActionBtn : styles.ActionBtn

    return (
        <div>
            <button
                className={styleBtnValue}
                disabled={props.count === props.value || props.editMode}
                onClick={onClickHandler}
            >Reset
            </button>
        </div>
    )
}

export {
    ActionBtn
}