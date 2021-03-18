import React from "react";
import './Counter.css'
import {Display} from "../Display/Display";
import {IncBtn} from "../IncBtn/IncBtn";
import {ResetBtn} from "../ResetBtn/ResetBtn";

type CounterPropsType = {
    addValue: () => void
    resetValue: () => void
    onDisplay: number
}

export const Counter: React.FC<CounterPropsType> = (props) => {
    return (
        <div className={'CounterBody'}>
            <div className={'Display'}>
                <Display
                    onDisplay={props.onDisplay}
                />
            </div>
            <div className={'BtnArea'}>
                <IncBtn
                    addValue={props.addValue}
                    onDisplay={props.onDisplay}
                />
                <ResetBtn
                    resetValue={props.resetValue}
                    onDisplay={props.onDisplay}
                />
            </div>
        </div>
    )
}