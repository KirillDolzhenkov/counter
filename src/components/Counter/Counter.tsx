import React from "react";
import './Counter.css'
import {Display} from "./Display/Display";
import {IncBtn} from "./IncBtn/IncBtn";
import {ResetBtn} from "./ResetBtn/ResetBtn";

//types:
type CounterPropsType = {
    addValue: () => void
    resetValue: () => void
    count: number
    maxValue: number
    startValue: number
    editMode: boolean
}

//functional component:
export const Counter: React.FC<CounterPropsType> = (props) => {
    return (
        <div className={'CounterBody'}>
            <div className={'Display'}>
                <Display
                    maxValue={props.maxValue}
                    count={props.count}
                    editMode={props.editMode}
                />
            </div>
            <div className={'BtnArea'}>
                <IncBtn
                    addValue={props.addValue}
                    count={props.count}
                    maxValue={props.maxValue}
                    editMode={props.editMode}
                />
                <ResetBtn
                    resetValue={props.resetValue}
                    count={props.count}
                    startValue={props.startValue}
                    editMode={props.editMode}
                />
            </div>
        </div>
    )
}