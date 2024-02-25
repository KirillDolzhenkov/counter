import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetCurrentValueAC } from '../../reducers/CountReducer';
import { setMaxValuesAC, setMinValuesAC, SettingsStateType } from '../../reducers/SettingsReducer';
import { RootReducerType } from '../../store/store';
import { CHANGE_VALUE_TYPE } from '../../constants/constants';

type SettingsProps = {
    changeWindow: () => void;
};

type ChangeValueType = 'min' | 'max';
const { MIN, MAX } = CHANGE_VALUE_TYPE;

export const Settings = ({ changeWindow }: SettingsProps) => {
    const dispatch = useDispatch();

    const settingsData = useSelector<RootReducerType, SettingsStateType>((state) => state.settings);
    const [minValue, setMinValue] = useState<number>(settingsData.minValue);
    const [maxValue, setMaxValue] = useState<number>(settingsData.maxValue);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        setError(minValue >= maxValue || minValue < 0);
    }, [minValue, maxValue]);

    const updateValue = (type: ChangeValueType, newValue: number) => {
        type === MIN ? setMinValue(newValue) : setMaxValue(newValue);
    };

    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>, type: ChangeValueType) => {
        const value = +e.currentTarget.value;
        updateValue(type, value);
    };

    const handleValueUpdate = (type: ChangeValueType, step: number) => {
        updateValue(type, getValue(type) + step);
    };

    const getValue = (type: ChangeValueType) => (type === MIN ? minValue : maxValue);

    const saveSettings = () => {
        changeWindow();
        dispatch(setMinValuesAC(minValue));
        dispatch(resetCurrentValueAC(minValue));
        dispatch(setMaxValuesAC(maxValue));
        updateLocalStorage();
    };

    const updateLocalStorage = () => {
        localStorage.setItem('minValue', JSON.stringify(minValue));
        localStorage.setItem('maxValue', JSON.stringify(maxValue));
    };

    const errorClassName = error ? 'error' : '';

    return (
        <div className="set-field">
            <div className="input-field">
                <div className="input-row">
                    <div className="input-items">
                        <span className="input-label">minimal value</span>
                        <input
                            type="number"
                            onChange={(e) => handleValueChange(e, MIN)}
                            className={`set-field__display display ${errorClassName}`}
                            value={minValue}
                        />
                    </div>
                    <div className="button-items">
                        <button
                            className="set-field__button button button-secondary"
                            onClick={() => handleValueUpdate(MIN, -1)}
                        >-</button>
                        <button
                            className="set-field__button button button-primary"
                            onClick={() => handleValueUpdate(MIN, 1)}
                        >+</button>
                    </div>
                </div>
                <div className="input-row">
                    <div className="input-items">
                        <span className="input-label">maximal value</span>
                        <input
                            type="number"
                            onChange={(e) => handleValueChange(e, MAX)}
                            className={`set-field__display display ${errorClassName}`}
                            value={maxValue}
                        />
                    </div>
                    <div className="button-items">
                        <button
                            className="set-field__button button button-secondary"
                            onClick={() => handleValueUpdate(MAX, -1)}
                        >-</button>
                        <button
                            className="set-field__button button button-primary"
                            onClick={() => handleValueUpdate(MAX, 1)}
                        >+</button>
                    </div>
                </div>
            </div>
            <div className="control-panel">
                <button
                    disabled={error}
                    className="control-panel__button button button-primary"
                    onClick={saveSettings}
                >save</button>
            </div>
        </div>
    );
};