import React, { useEffect } from 'react';
import Main from '../Components/main';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import './styles/favorites.css';

export const Favorites = () => {
  const favorites = useSelector(state => state.favorites.favoritesRecipes)
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.data) {
      dispatch({ type: "SetFavourRecipes", payload: JSON.parse(localStorage.data) })
    }
  }, [])

  return (
  <div>
    <Container
      className='d-flex flex-wrap justify-content-center w-100'
      id='wrapper'
    >
      {(favorites.length !== 0) ?
        favorites.map(elem =>
          <Main key={elem.idMeal} recipe={elem} length={favorites.length}/>
        ) :
        <h1 className='no_dishes'>There is no favorites dishes</h1>
      }
    </Container>
  </div>
  )};
