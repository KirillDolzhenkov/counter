import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
    addCurrentValueAC,
    CounterStateType,
    resetCurrentValueAC,
} from "./reducers/CountReducer";
import {
    setMaxValuesAC,
    setMinValuesAC,
    SettingsStateType,
} from "./reducers/SettingsReducer";
import { Settings } from "./components/Settings/Settings";
import { Display } from "./components/Display/Display";
import { ControlPanel } from "./components/ControlPanel/ControlPanel";
import { RootReducerType } from "./store/store";

function App() {
    const dispatch = useDispatch();
    const { currentValue } = useSelector<RootReducerType, CounterStateType>(
        (state) => state.counter
    );
    const { minValue, maxValue } = useSelector<RootReducerType, SettingsStateType>(
        (state) => state.settings
    );

    useEffect(() => {
        const storageMinValue = Number(localStorage.getItem("minValue"));
        const storageMaxValue = Number(localStorage.getItem("maxValue"));
        dispatch(resetCurrentValueAC(minValue));
        dispatch(setMinValuesAC(storageMinValue));
        dispatch(setMaxValuesAC(storageMaxValue));
    }, [dispatch, minValue]);

    const [error, setError] = useState(false);
    const [isOpenSettings, setIsOpenSettings] = useState(false);

    const incValue = () => {
        dispatch(addCurrentValueAC());
    };

    const resetValue = () => {
        dispatch(resetCurrentValueAC(minValue));
    };

    const toggleSettings = () => {
        setIsOpenSettings(!isOpenSettings);
    };

    return (
        <div className="App">
            <div className="app-body">
                {isOpenSettings
                    ? <Settings changeWindow={toggleSettings} />
                    : <div className="counter">
                        <Display currentValue={currentValue} error={error} />
                        <ControlPanel
                            currentValue={currentValue}
                            minValue={minValue}
                            maxValue={maxValue}
                            incValue={incValue}
                            resetValue={resetValue}
                            setError={setError}
                            changeWindow={toggleSettings}
                        />
                    </div>
                }
            </div>
        </div>
    );
}

export default App;