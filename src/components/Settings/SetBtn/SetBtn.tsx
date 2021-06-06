import React from "react";
import "./SetBtn.css"

type SetBtnPropsType = {
    addStartValue: (value: number) => void
    startInputValue: number
}

export const SetBtn: React.FC<SetBtnPropsType> = (props) => {
    const onclickHandler =()=> {props.addStartValue(props.startInputValue)}
    return(
        <div>
            <button
                className={"SetBtn"}
                onClick={onclickHandler}
            >Set</button>
        </div>
    )
}