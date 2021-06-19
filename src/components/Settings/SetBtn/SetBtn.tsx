import React from "react";
import "./SetBtn.css"

type SetBtnPropsType = {
    addStartValue: (value: number) => void
    addMaxValue: (value: number) => void
    startValue: number
    maxValue: number
    changeEditMode: (value: boolean) => void
    addLocalStorageValues: (startValue: number, maxValue: number) => void
}

export const SetBtn: React.FC<SetBtnPropsType> = (props) => {
    const onclickHandler = () => {
        props.addStartValue(props.startValue);
        props.addLocalStorageValues(props.startValue, props.maxValue); // <-- addLocalStorageValues
        props.changeEditMode(false);

    }
    return (
        <div>
            <button
                className={"SetBtn"}
                onClick={onclickHandler}
            >Set
            </button>
        </div>
    )
}