import React from "react";
import "./SetBtn.css"

type SetBtnPropsType = {
    setStartValue: (value: number) => void
}

export const SetBtn: React.FC<SetBtnPropsType> = (props) => {
    const onclickHandler =()=> {/*props.setStartValue()*/}
    return(
        <div>
            <button
                className={"SetBtn"}
                onClick={onclickHandler}
            >Set</button>
        </div>
    )
}