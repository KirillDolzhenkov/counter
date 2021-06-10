import React from "react";
import "./SetBtn.css"

type SetBtnPropsType = {
    addStartValue: (value: number) => void
    addMaxValue: (value: number) => void
    startValue: number
    maxValue: number
    changeEditMode: (value: boolean)=> void
}

export const SetBtn: React.FC<SetBtnPropsType> = (props) => {
    const onclickHandler =()=> {
        props.addStartValue(props.startValue);
        props.changeEditMode(false)
    }
    return(
        <div>
            <button
                className={"SetBtn"}
                onClick={onclickHandler}
            >Set</button>
        </div>
    )
}