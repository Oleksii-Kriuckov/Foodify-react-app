import { useDispatch, useSelector } from 'react-redux';


export const useModal = () => {
    const dispatch = useDispatch();
    const dishTitle = useSelector(state => state.formData.dishTitle)
    const dishDescription = useSelector(state => state.formData.dishDescription)
    const favorites = useSelector(state => state.favorites.favoritesRecipes)

    const addNewRecipe = () => {
        // setValidation(true);

        // if (isValidTitle && isValidDescription) {
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
        //     setValidation(false);
        //     setIsValidTitle(false);
        //     setIsValidDescription(false);
        // }
    }

    const closeModal = () => {
        // setValidation(false);
        // setIsValidTitle(false);
        // setIsValidDescription(false);
        dispatch({ type: "setDishTitle", payload: '' })
        dispatch({ type: "setDishDescription", payload: '' })
        dispatch({ type: "setShowModal", payload: false })
    }
    return { addNewRecipe, closeModal };
}