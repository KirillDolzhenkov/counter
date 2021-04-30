import React from "react";
import "./Settings.css"
import {SetBtn} from "./SetBtn/SetBtn";

type SettingsPropsType = {}

export const Settings: React.FC<SettingsPropsType> = (props) => {
    return (
        <div className={"SettingsBody"}>
            <div className={'SettingsArea'}>
                <div>
                    <h2>max value: <input/></h2>
                </div>
                <div>
                    <h2>start value: <input/></h2>
                </div>
            </div>
            <div className={"BtnArea"}>
                <span>
                   <SetBtn/>
                </span>
            </div>
        </div>
    )
}