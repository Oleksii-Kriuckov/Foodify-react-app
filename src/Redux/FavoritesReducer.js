const defaultState = {
    favoritesRecipes: []
}

export const favoritesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "AddRecipe": 
        return {...state, favoritesRecipes: [...state.favoritesRecipes, action.payload]}

        case "RemoveRecipe":
        return {...state, favoritesRecipes: state.favoritesRecipes.filter(recipe => recipe.idMeal !== action.payload)}

        case "SetFavourRecipes":
        return {...state, favoritesRecipes: action.payload}
        
        default: return state; 
    }
}