import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {resetCurrentValueAC,} from '../../reducers/CountReducer';
import {setMaxValuesAC, setMinValuesAC, SettingsStateType,} from '../../reducers/SettingsReducer';
import {RootReducerType} from '../../store/store';

type SettingsProps = {
    changeWindow: () => void;
};

export const Settings = ({ changeWindow }: SettingsProps) => {

    const dispatch = useDispatch();
    const settingsData = useSelector<RootReducerType, SettingsStateType>((state) => state.settings);

    const [minValue, setMinValue] = useState<number>(settingsData.minValue);
    const [maxValue, setMaxValue] = useState<number>(settingsData.maxValue);
    const [error, setError] = useState<boolean>(false);
    const errorClassName = error ? 'error' : '';

    useEffect(() => {
        if (minValue >= maxValue || minValue < 0) {
            setError(true);
        } else {
            setError(false);
        }
    }, [minValue, maxValue]);

    const increaseValue = (type: 'min' | 'max') => {
        if (type === 'min') {
            setMinValue((prevValue) => prevValue + 1);
        } else {
            setMaxValue((prevValue) => prevValue + 1);
        }
    };

    const reduceValue = (type: 'min' | 'max') => {
        if (type === 'min') {
            setMinValue((prevValue) => prevValue - 1);
        } else {
            setMaxValue((prevValue) => prevValue - 1);
        }
    };

    const onValueChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        type: 'min' | 'max'
    ) => {
        const value = +e.currentTarget.value;
        if (type === 'min') {
            setMinValue(value);
        } else {
            setMaxValue(value);
        }
    };

    const onChangeWindowHandler = () => {
        changeWindow();
        dispatch(setMinValuesAC(minValue));
        dispatch(resetCurrentValueAC(minValue));
        dispatch(setMaxValuesAC(maxValue));
        localStorage.setItem('minValue', JSON.stringify(minValue));
        localStorage.setItem('maxValue', JSON.stringify(maxValue));
    };

    return (
        <div className="setField">
            <div className="inputField">
                <div className="inputRow">
                    <div>
                        <span className="setLabel">minimum</span>
                        <input
                            onChange={(e) => onValueChange(e, 'min')}
                            className={`display ${errorClassName}`}
                            value={minValue}
                        />
                    </div>
                    <div>
                        <button
                            className="button button-secondary"
                            onClick={() => reduceValue('min')}
                        >-</button>
                        <button
                            className="button button-primary"
                            onClick={() => increaseValue('min')}
                        >+</button>
                    </div>
                </div>
                <div className="inputRow">
                    <div>
                        <span className="setLabel">maximum</span>
                        <input
                            onChange={(e) => onValueChange(e, 'max')}
                            className={`display ${errorClassName}`}
                            value={maxValue}
                        />
                    </div>
                    <div>
                        <button
                            className="button button-secondary"
                            onClick={() => reduceValue('max')}
                        >-</button>
                        <button
                            className="button button-primary"
                            onClick={() => increaseValue('max')}
                        >+</button>
                    </div>
                </div>
            </div>
            <div className="control-panel settings">
                <button
                    disabled={error}
                    className="button button-primary"
                    onClick={onChangeWindowHandler}
                >save</button>
            </div>
        </div>
    );
};