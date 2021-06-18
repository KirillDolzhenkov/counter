import React, {ChangeEvent} from "react";
import "./Settings.css"
import {SetBtn} from "./SetBtn/SetBtn";

type SettingsPropsType = {
    addStartValue: (value: number) => void
    addMaxValue: (value: number) => void
    startValue: number
    maxValue: number
    changeEditMode: (value: boolean) => void
}

export const Settings: React.FC<SettingsPropsType> = (props) => {

    const startValueHandler = (e: ChangeEvent<HTMLInputElement>)=>{
        props.addStartValue(parseInt(e.currentTarget.value));
        props.changeEditMode(true);
    }

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>)=>{
        props.addMaxValue(parseInt(e.currentTarget.value));
        props.changeEditMode(true);
    }
    return (
        <div className={"SettingsBody"}>
            <div className={'SettingsArea'}>
                <h2>
                    <span>max value: </span>
                    <input
                        type={"number"}
                        className={'SetInput'}
                        value={props.maxValue}
                        onChange={maxValueHandler}
                    />
                </h2>
                <h2>
                    <span>start value: </span>
                    <span><input
                        type={"number"}
                        className={'SetInput'}
                        value={props.startValue}
                        onChange={startValueHandler}
                    /></span>
                </h2>
            </div>
            <div className={"SBtnArea"}>
                <SetBtn
                    addStartValue={props.addStartValue}
                    addMaxValue={props.addMaxValue}
                    startValue={props.startValue}
                    maxValue={props.maxValue}
                    changeEditMode={props.changeEditMode}
                />
            </div>
        </div>
    )
}