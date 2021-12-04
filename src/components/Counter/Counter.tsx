import React from "react";

import style from './Counter.module.css'
import {Display} from "./Display/Display";
import {ActionBtn} from "./ActionBtn/ActionBtn";

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
const Counter: React.FC<CounterPropsType> = (props) => {

    const addValue = () => {
        props.addValue();
    }

    const resetValue = () => {
        props.resetValue();
    }

    return (
        <div className={style.CounterBody}>
            <div className={style.Display}>

                <Display
                    maxValue={props.maxValue}
                    count={props.count}
                    editMode={props.editMode}
                />

            </div>
            <div className={style.BtnArea}>

                <ActionBtn
                    title={"Inc"}
                    actionFn={addValue}
                    count={props.count}
                    value={props.maxValue}
                    editMode={props.editMode}
                />

                <ActionBtn
                    title={"Reset"}
                    actionFn={resetValue}
                    count={props.count}
                    value={props.startValue}
                    editMode={props.editMode}
                />

            </div>
        </div>
    )
}

export {
    Counter
}