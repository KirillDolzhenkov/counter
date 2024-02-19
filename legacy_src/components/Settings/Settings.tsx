import React, {useState} from "react";

import "../../styles/Settings.scss"
import "../../styles/Buttons.scss"
import {Button} from "../Button/Button";
import {Display} from "../Display/Display";

//types:
type SettingsPropsType = {
    changeStartValue: (newValue: number) => void
    changeMaxValue: (newValue: number) => void
    closeWindow: () => void
}

export const Settings: React.FC<SettingsPropsType> = (props) => {
    const {
        changeStartValue,
        changeMaxValue,
        closeWindow,
    } = props;
    
    //local state:
    const [startValue, setStartValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(1);
    const [error, setError] = useState<boolean>(false);

    //styles
    const displayClassName = !error ? "settingsInput" : "settingsInput error"
    const saveButtonClass = !error ? "Inc" : "Inc disable";

    //change value buttons
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

    //check errors Fns
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

    //onChangeHandlers
    const onStartValueChange = (value: number) => {
       /* const value = +e.currentTarget.value;*/
        checkStartError(value);
        setStartValue(value);
    }
    const onMaxValueChange = (value: number) => {
        /*const value = +e.currentTarget.value;*/
        checkMaxError(value);
        setMaxValue(value);
    }

    //change values callBack
    const saveChanges = () => {
        changeStartValue(startValue);
        changeMaxValue(maxValue);
        closeWindow()
    }

    return (
        <div className={"settingsArea"}>
            <div>start value:</div>
            <div className={"settingsItems"}>
                <Display
                    isEditable={true}
                    value={startValue}
                    className={displayClassName}
                    callback={(value)=>onStartValueChange(value)}
                />
                <div className={"changeValueBtn"}>
                    <Button
                        name={"-"}
                        className={"Reset"}
                        callback={removeStartValue}
                    />
                    <Button
                        name={"+"}
                        className={"Inc"}
                        callback={addStartValue}
                    />
                </div>
            </div>
            <div>max value:</div>
            <div className={"settingsItems"}>
                <Display
                    isEditable={true}
                    value={maxValue}
                    className={displayClassName}
                    callback={onMaxValueChange}
                />
                <div className={"changeBtnBar"}>
                    <Button
                        name={"-"}
                        className={"Reset"}
                        callback={removeMAxValue}
                    />
                    <Button
                        name={"+"}
                        className={"Inc"}
                        callback={addMaxValue}
                    />
                </div>
            </div>
            <div className={"saveBtnBar"}>
                {/*<div style={{color: "#fff"}}> in progress...</div>*/}
                <Button
                    name={"Save"}
                    className={saveButtonClass}
                    callback={saveChanges}
                    isDisable={error}
                />
            </div>
        </div>
    );
}
