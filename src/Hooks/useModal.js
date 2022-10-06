import { useDispatch, useSelector } from 'react-redux';


export const useModal = () => {
    const dispatch = useDispatch();
    const dishTitle = useSelector(state => state.formData.dishTitle)
    const dishDescription = useSelector(state => state.formData.dishDescription)
    const favorites = useSelector(state => state.favorites.favoritesRecipes)

    const addNewRecipe = () => {
        const newRecipe = {
            strMeal: dishTitle,
            strInstructions: dishDescription,
            idMeal: Date.now()
        }
        dispatch({ type: "AddRecipe", payload: newRecipe })
        localStorage.data = JSON.stringify([...favorites, newRecipe]);
        dispatch({ type: "setDishTitle", payload: '' })
        dispatch({ type: "setDishDescription", payload: '' })
        dispatch({ type: "setShowModal", payload: false })
    }

    const closeModal = () => {
        dispatch({ type: "setDishTitle", payload: '' })
        dispatch({ type: "setDishDescription", payload: '' })
        dispatch({ type: "setShowModal", payload: false })
    }
    return { addNewRecipe, closeModal };
}