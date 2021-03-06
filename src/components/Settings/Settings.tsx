import React, {ChangeEvent, useEffect, useState} from "react";
import "./Settings.css"
import {SetBtn} from "./SetBtn/SetBtn";

//types:
type SettingsPropsType = {
    addStartValue: (value: number) => void
    addMaxValue: (value: number) => void
    startValue: number
    maxValue: number
    changeEditMode: (value: boolean) => void
    error: boolean
}

//functional component:
const Settings: React.FC<SettingsPropsType> = (props) => {

    //localSettings:
    const [localMaxValue, setLocalMaxValue] = useState<number>(props.maxValue);
    const [localStartValue, setLocalStartValue] = useState<number>(props.startValue);

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

    /*let inputClass = props.error ? 'errorInput' : 'SetInput';*/
    let inputClass = props.error ?  `SetInput error` : 'SetInput';



    return (
        <div className={"SettingsBody"}>
            <div className={'SettingsArea'}>
                <h2>
                    <span>max value: </span>
                    <input
                        type={"number"}
                        className={inputClass}
                        value={props.maxValue}
                        onChange={maxValueHandler}
                    />
                </h2>
                <h2>
                    <span>start value: </span>
                    <span><input
                        type={"number"}
                        className={inputClass}
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
                    error={props.error}
                />
            </div>
        </div>
    )
}

export {
    Settings
}