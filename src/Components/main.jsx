import React, {useRef} from 'react';
import PlaceholderImg from './PlaceholderImg';

const Main = ({ recipe }) => {
  
  return <main className='mx-auto favour' >
    {(recipe.strMealThumb) ?
      <img className='favourImg' src={recipe.strMealThumb} alt='dish' />
      : <PlaceholderImg />
    }
    <article >
      <h2>{recipe.strMeal}</h2>
      <p>{recipe.strInstructions}</p>
    </article>
  </main>;
};

export default Main;
