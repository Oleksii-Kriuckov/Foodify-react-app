import React from 'react';
import { useSelector } from 'react-redux';

const Main = ( {recipe} ) => {

return <main className='mx-auto favour' >
    <img className='favourImg' src={recipe.strMealThumb} alt='dish' />
    <article >
      <h2>{recipe.strMeal}</h2>
      <p>{recipe.strInstructions}</p>
    </article>
  </main>;
};

export default Main;
