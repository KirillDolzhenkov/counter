
import React from "react";
/*
import {Display} from "./Display/Display";
import {ActionBtn} from "./ActionBtn/ActionBtn";

//types:
type CounterPropsType = {
   /!* addValue: () => void
    resetValue: () => void
    count: number
    maxValue: number
    startValue: number
    editMode: boolean*!/

    countValue: number
    addValue: () => void
    resetValue: () => void

}

//functional component:
const Counter: React.FC<CounterPropsType> = (props) => {
    const {
        countValue,
        addValue,
        resetValue,
    } = props;


    return (
        <div className={style.CounterBody}>
            <button className="open-modal-btn">&#9881; settings</button>
            {/!* <div className="overlay">
        <div className="modal">
          <svg height="200" viewBox="0 0 200 200" width="200">
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
          <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
        </div>
      </div> *!/}
            <div className={style.Display}>
                <Display
                    countValue={countValue}
                    maxCountValue={5}
                />
            </div>
            <div className={style.BtnArea}>
               <ActionBtn
                   btnName={"Inc"}
                   countValue={countValue}
                   actionFn={addValue}
                   maxCountValue={5}
               />
               <ActionBtn
                   btnName={"Reset"}
                   countValue={countValue}
                   actionFn={resetValue}
                   maxCountValue={0}
               />
            </div>
        </div>
    );
}

export {
    Counter
}
*/


    /*const addValue = () => {
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
}*/

