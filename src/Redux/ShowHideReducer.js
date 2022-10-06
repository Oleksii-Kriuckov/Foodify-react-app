const defaultState = {
    showFeedBack: false,
    showModal: false
}

export const showHideReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "setShowFeedBack": 
        return {...state, showFeedBack: action.payload}
        case "setShowModal": 
        return {...state, showModal: action.payload}

        default: return state;
    }
}