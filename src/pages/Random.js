import React, { useEffect } from 'react';
import axios from 'axios'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Styles from './styles/randomPageStyles.css'

const Random = () => {
  const dispath = useDispatch();
  const favourites = useSelector(state => state.favourites.favouritesRecipes)
  const recipe = useSelector(state => state.random.recipe);

  async function fetchRandomRecipe() {
    const responce = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
    dispath({ type: "RandomRecipe", payload: responce.data.meals[0] })
  }

  useEffect(() => {
    fetchRandomRecipe();
  }, [])

  const addFavourites = (id) => {
    if (favourites.every(el => el.idMeal !== id)) {
      dispath({ type: "AddRecipe", payload: recipe })
      localStorage.data = JSON.stringify([...favourites, recipe]);
    }
  }

  return <div className='d-flex flex-column align-items-center'>
    <main className='mx-auto random' styles={Styles}>
      <img src={recipe.strMealThumb} alt='dish' />
      <article >
        <h2>{recipe.strMeal}</h2>
        <p>{recipe.strInstructions}</p>
      </article>
    </main>

    <div className='buttons'>
      <Button variant='danger' className='me-3' onClick={fetchRandomRecipe}>Skip</Button>
      <Button variant='success' onClick={() => addFavourites(recipe.idMeal)}>Like</Button>
    </div>
  </div>
};

export default Random;
