import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import PlaceholderImg from './PlaceholderImg';

const Main = ({ recipe }) => {
  const dispath = useDispatch();
  // const favourites = useSelector(state => state.favourites.favouritesRecipes);

  const removeRecipe = () => {
    dispath({type: "RemoveRecipe", payload: recipe.idMeal})
    let data = JSON.parse(localStorage.data)
    localStorage.data = JSON.stringify(data.filter(elem => elem.idMeal !== recipe.idMeal))
  }

  return <main className='favour' >
    {(recipe.strMealThumb) ?
      <img className='favourImg' src={recipe.strMealThumb} alt='dish' />
      : <PlaceholderImg />
    }
    <article >
      <h2>{recipe.strMeal}</h2>
      <p>{recipe.strInstructions}</p>
    </article>
    <Button onClick={removeRecipe} variant='danger'>Remove</Button>
  </main>;
};

export default Main;
