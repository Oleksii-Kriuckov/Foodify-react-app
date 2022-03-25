import React, { useEffect } from 'react';
import Main from '../Components/main';
import { useSelector, useDispatch } from 'react-redux';
import './styles/favourites.css';
import { Container } from 'react-bootstrap';

export const Favourites = () => {
  const favourites = useSelector(state => state.favourites.favouritesRecipes);
  const dispath = useDispatch();

  useEffect(() => {
    if (localStorage.data) {
      dispath({ type: "SetFavourRecipes", payload: JSON.parse(localStorage.data) })
    }
  }, [])

  return (
  <div>
    <Container
      className='d-flex flex-wrap justify-content-center w-100'
      id='wrapper'
    >
      {(favourites.length !== 0) ?
        favourites.map(elem =>
          <Main key={elem.idMeal} recipe={elem} length={favourites.length}/>
        ) :
        <h1 className='no_dishes'>There is no favourites dishes</h1>
      }
    </Container>
  </div>
  )};
