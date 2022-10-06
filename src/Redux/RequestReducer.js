const defaultState = {
    isResponse: false,
    errorMsg: ''
}

export const requestReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "setIsResponse": 
        return {...state, isResponse: action.payload}
        case "errorMsg": 
        return {...state, errorMsg: action.payload}

        default: return state;
    }
}
