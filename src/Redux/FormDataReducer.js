const defaultState = {
    dishTitle: '',
    dishDescription: ''
}

export const formDataReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "setDishTitle": 
        return {...state, dishTitle: action.payload}
        case "setDishDescription": 
        return {...state, dishDescription: action.payload}

        default: return state;
    }
}