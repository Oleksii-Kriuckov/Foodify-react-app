import { useDispatch, useSelector } from 'react-redux';

export const useFavorites = () => {
  const favorites = useSelector(state => state.favorites.favoritesRecipes)
  const recipe = useSelector(state => state.random.recipe);
  const dispatch = useDispatch();

    const addFavorites = (id) => {
        if (favorites.every(el => el.idMeal !== id)) {
          dispatch({ type: "setShowFeedBack", payload: true })
          dispatch({ type: "AddRecipe", payload: recipe })
          localStorage.data = JSON.stringify([...favorites, recipe]);
          setTimeout(() => dispatch({ type: "setShowFeedBack", payload: false }), 1000);
        }
      }
  return {addFavorites};
}
