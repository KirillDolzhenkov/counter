import React, {useReducer, useState} from 'react';
import {CountReducer, resetCurrentValueAC} from "../../reducers/CountReducer";
import {setMaxValuesAC, setMinValuesAC, SettingsReducer, SettingsStateType} from "../../reducers/SettingsReducer";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "../../store/store";

type SettingsProps = {
    changeWindow: () => void
}

export const Settings = ({changeWindow}: SettingsProps) => {

    const dispatch = useDispatch();
    const SettingsData = useSelector<RootReducerType, SettingsStateType>(
        (state) => state.Settings);

    const [minValue, setMinValue] = useState<number>(SettingsData.minValue);
    const [maxValue, setMaxValue] = useState<number>(SettingsData.maxValue);

    const increaseMinValue = () => {
        setMinValue(minValue + 1);
    }
    const reduceMinValue = () => {
        setMinValue(minValue - 1);
    }
    const increaseMaxValue = () => {
        setMaxValue(maxValue + 1);
    }
    const reduceMaxValue = () => {
        setMaxValue(maxValue - 1);
    }

    const onChangeWindowHandler = () => {
        changeWindow();

        dispatch(setMinValuesAC(minValue));
        dispatch(resetCurrentValueAC(minValue));
        dispatch(setMaxValuesAC(maxValue));
    }

    return (
        <div className={'setField'}>

            <div className={'inputField'}>
                <div style={{display: "flex", width: "100%"}}>
                    <div>
                        <span className={'setMax'}>maximum</span>
                        <input value={minValue}/>
                    </div>
                    <div>
                        <button
                            className="button button-secondary"
                            onClick={reduceMinValue}
                        >-
                        </button>
                        <button
                            className="button button-primary"
                            onClick={increaseMinValue}
                        >+
                        </button>
                    </div>
                </div>

                <div style={{display: "flex", width: "100%"}}>
                    <div>
                        <span className={'setMin'}>minimum</span>
                        <input value={maxValue}/>
                    </div>

                    <div>
                        <button
                            className="button button-secondary"
                            onClick={reduceMaxValue}
                        >-
                        </button>
                        <button
                            className="button button-primary"
                            onClick={increaseMaxValue}
                        >+
                        </button>
                    </div>
                </div>
            </div>

            <div className="control-panel settings">
                <button
                    className="button button-primary"
                    onClick={onChangeWindowHandler}
                >save
                </button>
            </div>
        </div>
    );
};