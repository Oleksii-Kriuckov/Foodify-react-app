import axios from 'axios';
import { useDispatch } from 'react-redux';


function useFetch() {
    const dispatch = useDispatch();

    async function fetchRandomRecipe() {
        await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
            .then((response) => {
                dispatch({ type: "renderRandomRecipe", payload: response.data.meals[0] });
                dispatch({ type: 'setIsResponse', payload: true })
            })
            .catch((error) => {
                dispatch({ type: 'setIsResponse', payload: false })
                dispatch({ type: 'errorMsg', payload: error.toJSON().message })
            })
    }

    return { fetchRandomRecipe }
}
export default useFetch