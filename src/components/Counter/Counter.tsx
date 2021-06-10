import React from "react";
import './Counter.css'
import {Display} from "../Display/Display";
import {IncBtn} from "../IncBtn/IncBtn";
import {ResetBtn} from "../ResetBtn/ResetBtn";

type CounterPropsType = {
    addValue: () => void
    resetValue: () => void
    count: number
    maxValue: number
    editMode: boolean

}

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
                />
                <ResetBtn
                    resetValue={props.resetValue}
                    count={props.count}
                />
            </div>
        </div>
    )
}