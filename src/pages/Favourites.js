import React from 'react';
import Main from '../Components/main';
import { useDispatch, useSelector } from 'react-redux';
import './styles/favourites.css';

export const Favourites = () => {
  const favourites = useSelector(state => state.favourites.favouritesRecipes)

  return <div className='d-flex'>
    {favourites.map(elem => 
      // <Main key={elem.idMeal} recipe={elem}/>
      console.log(elem)
      )}
  </div>;
};
