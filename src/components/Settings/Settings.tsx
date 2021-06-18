import React, {ChangeEvent, useEffect, useState} from "react";
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

    //localSettings:
    const [localMaxValue, setLocalMaxValue] = useState<number>(0);
    const [localStartValue, setLocalStartValue] = useState<number>(0);

    //callBacks:
    const startValueHandler = (e: ChangeEvent<HTMLInputElement>)=>{
        props.addStartValue(parseInt(e.currentTarget.value));
        props.changeEditMode(true);
    }

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>)=>{
        props.addMaxValue(parseInt(e.currentTarget.value));
        props.changeEditMode(true);
    }

    const addLocalStorageValues = (startValue: number, maxValue: number) => {
        setLocalStartValue(startValue);
        setLocalMaxValue(maxValue);
    }

    //localStorage:
    useEffect(() => {
        setStorageValues();
    },[localStartValue]);

    const setStorageValues = () => {
        localStorage.setItem("counterMaxValue", JSON.stringify(localMaxValue));
        localStorage.setItem("counterStartValue", JSON.stringify(localStartValue));
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
                    addLocalStorageValues={addLocalStorageValues}
                />
            </div>
        </div>
    )
}