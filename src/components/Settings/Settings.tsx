import React, {ChangeEvent, useState} from "react";
import "./Settings.css"
import {SetBtn} from "./SetBtn/SetBtn";

type SettingsPropsType = {
    addStartValue: (value: number) => void
    addMaxValue: (value: number) => void

}

export const Settings: React.FC<SettingsPropsType> = (props) => {

    const [maxInputValue, setMaxInputValue] = useState<number>(0)
    const [startInputValue, setStartInputValue] = useState<number>(0)

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>)=>{
        setMaxInputValue(parseInt(e.currentTarget.value))
    }
    const startValueHandler = (e: ChangeEvent<HTMLInputElement>)=>{
        setStartInputValue(parseInt(e.currentTarget.value))
    }
    return (
        <div className={"SettingsBody"}>
            <div className={'SettingsArea'}>
                <h2>
                    <span>max value: </span>
                    <input
                        type={"number"}
                        className={'SetInput'}
                        value={maxInputValue}
                        onChange={maxValueHandler}
                    />
                </h2>
                <h2>
                    <span>start value: </span>
                    <span><input
                        type={"number"}
                        className={'SetInput'}
                        value={startInputValue}
                        onChange={startValueHandler}
                    /></span>
                </h2>
            </div>
            <div className={"SBtnArea"}>
                <SetBtn
                    addStartValue={props.addStartValue}
                    startInputValue={startInputValue}

                />
            </div>
        </div>
    )
}