import React from "react";
import styles from "./SetBtn.module.css"

//types:
type SetBtnPropsType = {
    addStartValue: (value: number) => void
    addMaxValue: (value: number) => void
    startValue: number
    maxValue: number
    changeEditMode: (value: boolean) => void
    /*addLocalStorageValues: (startValue: number, maxValue: number) => void*/
    error: boolean
}

//functional component:
const SetBtn: React.FC<SetBtnPropsType> = (props) => {
    const onclickHandler = () => {
        props.addStartValue(props.startValue);
        /*props.addLocalStorageValues(props.startValue, props.maxValue);*/ // <-- addLocalStorageValues
        props.changeEditMode(false);

    }
    const styleBtnValue = props.error ? styles.disable : styles.SetBtn
    return (
        <div>
            <button
                className={styleBtnValue}
                disabled={props.error}
                onClick={onclickHandler}
            >Set</button>
        </div>
    )
}

export {
    SetBtn
}