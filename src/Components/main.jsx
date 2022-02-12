import React from 'react';
import { useSelector } from 'react-redux';

const Main = ({ children, ...props }) => {
  const recipe = useSelector(state => state.recipe);

  return <main className='mx-auto favour' >
    <img className='favourImg' src={recipe.strMealThumb} alt='dish' />
    <article >
      <h2>{recipe.strMeal}</h2>
      <p>{recipe.strInstructions}</p>
    </article>
  </main>;
};

export default Main;
