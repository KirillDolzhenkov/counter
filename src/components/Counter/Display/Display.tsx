import React from "react";

import "../../../App.scss"

//types:
type DisplayPropsType = {
    /*    count: number
        maxValue: number
        editMode: boolean*/
    countValue: number
    maxCountValue: number
}

//functional component:
const Display: React.FC<DisplayPropsType> = (props) => {
    const {
        countValue,
        maxCountValue,
    } = props;

    const inputClassName = countValue !== maxCountValue
        ? `display regularValue`
        : `display maxValue`;

    return (
        <>
            <input
                type="text"
                className={inputClassName}
                value={countValue}
            />
        </>
    );
}
/*  const classNamePropsValue = props.count === props.maxValue ? `${style.baseValue} ${style.redValue}` : `${style.baseValue}`;
  const inputValue = props.editMode ? `please enter the values and press "Set" btn` : props.count;
  const classNameValue = props.editMode ? `${style.baseValue} ${style.information}` : classNamePropsValue;

  return (
      <div>
          <input
              value={inputValue}
              className={classNameValue}
          />
      </div>
  )
}*/

export {
    Display
}