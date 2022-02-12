import { createStore } from "redux";

const defaultState = {
    recipe: {}
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "RandomRecipe": 
        return {...state, recipe: action.payload}

        default: return state;
    }
}

export const store = createStore(reducer)