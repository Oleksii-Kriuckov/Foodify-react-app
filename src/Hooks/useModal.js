import { useDispatch, useSelector } from 'react-redux';


export const useModal = () => {
    const dispatch = useDispatch();

    const addNewRecipe = () => {
        // setValidation(true);

        // if (isValidTitle && isValidDescription) {
        //     const newRecipe = {
        //         strMeal: dishTitle,
        //         strInstructions: dishDescription,
        //         idMeal: Date.now()
        //     }
        //     dispatch({ type: "AddRecipe", payload: newRecipe })
        //     localStorage.data = JSON.stringify([...favorites, newRecipe]);
        //     setDishTitle('');
        //     setDishDescription('');
        //     setValidation(false);
        //     setIsValidTitle(false);
        //     setIsValidDescription(false);
        //     props.onHide();
        // }
    }

const closeModal = () => {
    // setDishTitle('');
    // setDishDescription('');
    // setValidation(false);
    // setIsValidTitle(false);
    // setIsValidDescription(false);
    // // props.onHide()
    // dispatch({ type: "setShowModal", payload: true })
}
  return { addNewRecipe, closeModal };
}