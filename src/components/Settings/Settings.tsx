import React, {ChangeEvent, useEffect, useState} from "react";
import style from "./Settings.module.css"
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
    /*const [localMaxValue, setLocalMaxValue] = useState<number>(props.maxValue);
    const [localStartValue, setLocalStartValue] = useState<number>(props.startValue);*/

    //callBacks:
    const startValueHandler = (e: ChangeEvent<HTMLInputElement>)=>{
        props.addStartValue(parseInt(e.currentTarget.value));
        props.changeEditMode(true);
    }

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>)=>{
        props.addMaxValue(parseInt(e.currentTarget.value));
        props.changeEditMode(true);
    }

    /*const addLocalStorageValues = (startValue: number, maxValue: number) => {
        setLocalStartValue(startValue);
        setLocalMaxValue(maxValue);
    }*/

    //localStorage:

    /*useEffect(() => {
        setStorageValues();
    },[localStartValue]);

    const setStorageValues = () => {
        localStorage.setItem(`${style.counterMaxValue}`, JSON.stringify(localMaxValue));
        localStorage.setItem(`${style.counterStartValue}`, JSON.stringify(localStartValue));
    }*/

    /*let inputClass = props.error ? 'errorInput' : 'SetInput';*/
    let inputClass = props.error ?  `${style.SetInput} ${style.error}` : `${style.SetInput}`;



    return (
        <div className={style.SettingsBody}>
            <div className={style.SettingsArea}>
                <h2>
                    <span>max value: </span>
                    <span>
                        <input
                            type={'number'}
                            className={inputClass}
                            value={props.maxValue}
                            onChange={maxValueHandler}
                        />
                    </span>
                </h2>
                <h2>
                    <span>start value: </span>
                    <span><input
                        type={'number'}
                        className={inputClass}
                        value={props.startValue}
                        onChange={startValueHandler}
                    /></span>
                </h2>
            </div>
            <div className={style.SBtnArea}>
                <SetBtn
                    addStartValue={props.addStartValue}
                    addMaxValue={props.addMaxValue}
                    startValue={props.startValue}
                    maxValue={props.maxValue}
                    changeEditMode={props.changeEditMode}
                   /* addLocalStorageValues={addLocalStorageValues}*/
                    error={props.error}
                />
            </div>
        </div>
    )
}

export {
    Settings
}