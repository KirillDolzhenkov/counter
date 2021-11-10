import React from "react";
import styles from "./SetBtn.module.css"

//types:
type SetBtnPropsType = {
    testFn: ()=>void
    error: boolean


    /*addStartValue: (value: number) => void
    addMaxValue: (value: number) => void
    startValue: number
    maxValue: number*/
    /*changeEditMode: (value: boolean) => void*/
}

//functional component:
const SetBtn: React.FC<SetBtnPropsType> = (props) => {

    const onClickHandler = () => {
        props.testFn();

        /*   props.addStartValue(props.startValue);
        props.addMaxValue(props.maxValue);
        props.changeEditMode(false);*/
    }

    const styleBtnValue = props.error ? styles.disable : styles.SetBtn

    return (
        <div>
            <button
                className={styleBtnValue}
                disabled={props.error}
                onClick={onClickHandler}
            >Set</button>
        </div>
    )
}

export {
    SetBtn
}