import React from 'react';
import Main from '../Components/main';
import { useDispatch, useSelector } from 'react-redux';
import './styles/favourites.css';

export const Favourites = () => {
  const favourites = useSelector(state => state.favourites.favouritesRecipes)

return <div className='d-flex justify-content-center flex-wrap'>
    {(favourites.length !== 0) ?
      favourites.map(elem =>
        <Main key={elem.idMeal} recipe={elem} />
      ) :
      <h1 className='no_dishes'>There is no favourites dishes</h1>
    }
  </div>;
};
