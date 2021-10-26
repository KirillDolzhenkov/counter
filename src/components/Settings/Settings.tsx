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

    //callBacks:
    const startValueHandler = (e: ChangeEvent<HTMLInputElement>)=>{
        props.addStartValue(parseInt(e.currentTarget.value));
        props.changeEditMode(true);
    }

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>)=>{
        props.addMaxValue(parseInt(e.currentTarget.value));
        props.changeEditMode(true);
    }

    const inputClass = props.error ?  `${style.SetInput} ${style.error}` : `${style.SetInput}`

    return (
        <div className={style.SettingsBody}>
            <div className={style.displayArea}>
                <div className={style.descriptionArea}>
                    <div>max value:</div>
                    <div>start value:</div>
                </div>
                <div className={style.SettingsArea}>
                    <input
                        type={'number'}
                        className={inputClass}
                        value={props.maxValue}
                        onChange={maxValueHandler}
                    />
                    <input
                        type={'number'}
                        className={inputClass}
                        value={props.startValue}
                        onChange={startValueHandler}
                    />
                </div>
            </div>
            <div className={style.SBtnArea}>
                <SetBtn
                    addStartValue={props.addStartValue}
                    addMaxValue={props.addMaxValue}
                    startValue={props.startValue}
                    maxValue={props.maxValue}
                    changeEditMode={props.changeEditMode}
                    error={props.error}
                />
            </div>
        </div>
    )
}

export {
    Settings
}