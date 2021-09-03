import React from "react";
import styles from './IncBtn.module.css';
/*import styles from "../ResetBtn/Reset.module.css";*/

//types:
type IncBtnPropsType = {
    addValue: () => void
    count: number
    maxValue: number
    editMode: boolean
}

//functional component:
const IncBtn: React.FC<IncBtnPropsType> = (props) => {
    const onClickHandler = () =>{props.addValue()}
    /*const styleBtnValue = props.onDisplay === 0 ? 'IncBtn' : 'DisabledIncBtnBtn'*/
    const styleBtnValue = props.count === props.maxValue || props.editMode ? styles.disable : styles.IncBtn
    return (
        <>
            <span>
                <button
                    className={styleBtnValue}
                    disabled={props.count === props.maxValue || props.editMode}
                    onClick={onClickHandler}
                >Inc</button>
            </span>
        </>
    )
}

export {
    IncBtn
}