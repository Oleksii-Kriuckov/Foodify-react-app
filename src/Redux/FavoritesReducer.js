const defaultState = {
    favouritesRecipes: []
}

export const favouritesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "AddRecipe": 
        return {...state, favouritesRecipes: [...state.favouritesRecipes, action.payload]}

        case "SetFavourRecipes":
        return {...state, favouritesRecipes: action.payload}
        
        default: return state;
    }
}