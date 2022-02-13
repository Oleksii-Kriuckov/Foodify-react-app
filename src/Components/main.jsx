import React from 'react';
import { useSelector } from 'react-redux';

const Main = ( props ) => {
  // const recipe = useSelector(state => state.recipe);
  console.log(props)
  return <main className='mx-auto favour' >
    {/* <img className='favourImg' src={props.recipe.strMealThumb} alt='dish' /> */}
    <article >
      {/* <h2>{props.recipe.strMeal}</h2>
      <p>{props.recipe.strInstructions}</p> */}
      <p>what a fuck</p>
    </article>
  </main>;
};

export default Main;
