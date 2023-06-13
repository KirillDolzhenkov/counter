import React, {useState} from "react";

import "../../style/Settings.scss"
import "../../style/Buttons.scss"
import {ActionBtn} from "../ActionBtn/ActionBtn";

//types:
type SettingsPropsType = {
    changeStartValue: (newValue: number) => void
    changeMaxValue: (newValue: number) => void
    closeWindow: () => void
}

const Settings: React.FC<SettingsPropsType> = (props) => {
    const {
        changeStartValue,
        changeMaxValue,
        closeWindow,
    } = props;
    
    //local state:
    const [startValue, setStartValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(1);
    const [error, setError] = useState<boolean>(false);

    //classNames buttons & inputs:
    const displayClassName = !error ? "settingsInput" : "settingsInput error"
    const saveButtonClass = !error ? "Inc" : "Inc disable";

    //change value buttons:
    const addStartValue = () => {
        setStartValue(startValue + 1);
        checkStartError(startValue + 1 );
    }
    const removeStartValue = () => {
        setStartValue(startValue - 1);
        checkStartError(startValue - 1);
    }
    const addMaxValue = () => {
        setMaxValue(maxValue + 1);
        checkMaxError(maxValue + 1);
    }
    const removeMAxValue = () => {
        setMaxValue(maxValue - 1);
        checkMaxError(maxValue -1);
    }
    //check errors Fn:
    const checkStartError = (value: number) => {
        if (value >= maxValue || value < 0) {
            setError(true);
        } else {
            setError(false);
        }
    }
    const checkMaxError = (value: number) => {
        if (value <= startValue || value < 0) {
            setError(true);
        } else {
            setError(false);
        }
    }

    //onChangeHandlers:
    const onStartValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = +e.currentTarget.value;
        checkStartError(value);
        setStartValue(value);
    }
    const onMaxValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = +e.currentTarget.value;
        checkMaxError(value);
        setMaxValue(value);
    }

    //change values callBack:
    const saveChanges = () => {
        changeStartValue(startValue);
        changeMaxValue(maxValue);
        closeWindow()
    }

    return (
        <div className={"settingsArea"}>
            <div>start value:</div>
            <div className={"settingsItems"}>
                <input
                    type="none"
                    className={displayClassName}
                    onChange={onStartValueChange}
                    value={startValue}
                />
                <div className={"changeValueBtn"}>
                    <ActionBtn
                        name={"-"}
                        className={"Reset"}
                        callback={removeStartValue}
                    />
                    <ActionBtn
                        name={"+"}
                        className={"Inc"}
                        callback={addStartValue}
                    />
                </div>
            </div>
            <div>max value:</div>
            <div className={"settingsItems"}>
                <input
                    type="text"
                    className={displayClassName}
                    onChange={onMaxValueChange}
                    value={maxValue}
                />
                <div className={"changeBtnBar"}>
                    <ActionBtn
                        name={"-"}
                        className={"Reset"}
                        callback={removeMAxValue}
                    />
                    <ActionBtn
                        name={"+"}
                        className={"Inc"}
                        callback={addMaxValue}
                    />
                </div>
            </div>
            <div className={"saveBtnBar"}>
                {/*<div style={{color: "#fff"}}> in progress...</div>*/}
                <ActionBtn
                    name={"Save"}
                    className={saveButtonClass}
                    callback={saveChanges}
                    isDisable={error}
                />
            </div>
        </div>
    );
}

export {
    Settings
}
