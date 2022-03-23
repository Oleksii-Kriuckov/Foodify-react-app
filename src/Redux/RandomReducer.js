const defaultState = {
    recipe: {}
}

export const randomReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "renderRandomRecipe": 
        return {...state, recipe: action.payload}

        default: return state;
    }
}

