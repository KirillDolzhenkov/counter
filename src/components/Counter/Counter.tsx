import React from "react";

import style from './Counter.module.css'
import {Display} from "./Display/Display";
import {IncBtn} from "./IncBtn/IncBtn";
import {ResetBtn} from "./ResetBtn/ResetBtn";
import {ActionBtn} from "./ActionBtn";

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
               {/* <IncBtn
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
                />*/}
                <ActionBtn
                    actionFn={addValue}
                    count={props.count}
                    value={props.maxValue}
                    editMode={props.editMode}
                />
                <ActionBtn
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