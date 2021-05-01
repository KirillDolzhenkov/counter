import React from "react";
import "./Settings.css"
import {SetBtn} from "./SetBtn/SetBtn";

type SettingsPropsType = {
    setStartValue: (value: number) => void
}

export const Settings: React.FC<SettingsPropsType> = (props) => {


    return (
        <div className={"SettingsBody"}>
            <div className={'SettingsArea'}>
                <h2>
                    <span>max value: </span>
                    <input type={"number"} className={'SetInput'}/>
                </h2>
                <h2>
                    <span>start value: </span>
                    <span><input type={"number"} className={'SetInput'}/></span>
                </h2>
            </div>
            <div className={"SBtnArea"}>
                <SetBtn
                    setStartValue={props.setStartValue}

                />
            </div>
        </div>
    )
}