import React, {useState} from "react";

import style from "./Settings.module.css"
import "../../App.scss"

//types:
type SettingsPropsType = {
}

const Settings: React.FC<SettingsPropsType> = (props) => {
    const [error, setError] = useState(false);
    const inputClass = error ?  `${style.SetInput} ${style.error}` : `${style.SetInput}`;

    return (
        <div className={"SettingsArea"}>
            <div>start value:</div>
                    <div className={"settingsItems"}>
                        <>
                            <input
                                type="text"
                                className={"SetInput"}
                                value={"-"}
                            />
                        </>
                        <div  className={"changeValueBtn"}>
                            <button className={"Reset"}>-</button>
                            <button className={"Inc"}>+</button>
                        </div>
                    </div>
            <div>max value:</div>
            <div className={"settingsItems"}>
                        <>
                            <input
                                type="text"
                                className={"SetInput"}
                                value={"-"}
                            />
                        </>
                        <div className={"changeValueBtn"}>
                            <button className={"Reset"}>-</button>
                            <button className={"Inc"}>+</button>
                        </div>
                    </div>
                <div className={"SBtnArea"}>
                    <div style={{color: "#fff"}}> in progress...</div>
                    <button className={"Inc"}>Save</button>
                </div>
        </div>
    );
}

export {
    Settings
}


/*  const onStartValueChange = (e: ChangeEvent<HTMLInputElement>)=>{
      props.addStartValue(parseInt(e.currentTarget.value));
      props.changeEditMode(true);
  }
  const onMaxValueChange = (e: ChangeEvent<HTMLInputElement>)=>{
      props.addMaxValue(parseInt(e.currentTarget.value));
      props.changeEditMode(true);
  }
  const setValues = () => {
      props.addStartValue(props.startValue);
      props.addMaxValue(props.maxValue); //need to fix () !!!
      props.changeEditMode(false);
  }

  const inputClass = props.error ?  `${style.SetInput} ${style.error}` : `${style.SetInput}`

  return (
      <div className={style.SettingsBody}>
          <div className={style.displayArea}>
              <div className={style.descriptionArea}>
                  <div>max value:</div>
                  <div>start value:</div>
              </div>
              <div className={style.SettingsArea}>
                  <input
                      type={'number'}
                      className={inputClass}
                      value={props.maxValue}
                      onChange={onMaxValueChange}
                  />
                  <input
                      type={'number'}
                      className={inputClass}
                      value={props.startValue}
                      onChange={onStartValueChange}
                  />
              </div>
          </div>
          <div className={style.SBtnArea}>
              <SetBtn
                  testFn={setValues}

                  /!*addStartValue={props.addStartValue}
                  addMaxValue={props.addMaxValue}
                  startValue={props.startValue}
                  maxValue={props.maxValue}
                  changeEditMode={props.changeEditMode}*!/

                  error={props.error}
              />
          </div>
      </div>
  )
}*/