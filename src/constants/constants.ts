export const ERROR = {
    RESET_ERROR_VALUE: "",
    MAX_LIMIT_ERROR: "Over the maximum limit threshold",
    LOWER_LIMIT_ERROR: "Over the lower limit threshold",
    UPPER_LIMIT_ERROR: "Over the upper limit threshold"
} as const

export const ACTION_TYPE = {
    COUNT: {
        INC_CURRENT_VALUE: "COUNTER/COUNTER/INC_CURRENT_VALUE",
        RESET_CURRENT_VALUE: "COUNTER/COUNTER/RESET_CURRENT_VALUE"
    },
    SETTINGS: {
        SET_MIN_VALUE: "COUNTER/SETTINGS/SET_MIN_VALUE",
        SET_MAX_VALUE: "COUNTER/SETTINGS/SET_MAX_VALUE"
    }
} as const

export const APP_WINDOW = {
    COUNT: "Counter",
    SETTINGS: "Settings",
} as const

export const CHANGE_VALUE_TYPE = {
    MIN: "min",
    MAX: "max"
} as const