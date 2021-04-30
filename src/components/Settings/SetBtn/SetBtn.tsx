import React from "react";
import "./SetBtn.css"

type SetBtnPropsType = {}

export const SetBtn: React.FC<SetBtnPropsType> = () => {
    return(
        <div>
            <button className={"SetBtn"}>Set</button>
        </div>
    )
}