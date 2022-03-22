import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Styles from './styles/randomPageStyles.css'
import { Alert } from 'react-bootstrap'
// import Feedback from '../Components/Feedback';
import { Transition, CSSTransition } from 'react-transition-group';
import './styles/transitionGroup.css'

const Random = () => {
  const dispath = useDispatch();
  const favourites = useSelector(state => state.favourites.favouritesRecipes)
  const recipe = useSelector(state => state.random.recipe);

  const [showFeedBack, setShowFeedBack] = useState(false)

  async function fetchRandomRecipe() {
    const responce = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
    dispath({ type: "RandomRecipe", payload: responce.data.meals[0] })
  }

  useEffect(() => {
    fetchRandomRecipe();
  }, [])

  const addFavourites = (id) => {
    if (favourites.every(el => el.idMeal !== id)) {
      setShowFeedBack(true)
      dispath({ type: "AddRecipe", payload: recipe })
      localStorage.data = JSON.stringify([...favourites, recipe]);
      setTimeout(() => setShowFeedBack(false), 2000);
    }
  }

  const defaultStyle = {
    position: 'absolute',
    top: -45,
    right: -26,
    padding: '5px 10px',
    transition: `opacity 500ms ease-in-out`,
    opacity: 0,
  }

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return <div className='d-flex flex-column align-items-center'>
    <main className='mx-auto random' styles={Styles}>
      <img src={recipe.strMealThumb} alt='dish' />
      <article >
        <h2>{recipe.strMeal}</h2>
        <p>{recipe.strInstructions}</p>
      </article>
    </main>

    <div className='buttons position-relative'>
      {showFeedBack ?
        <Transition in={showFeedBack} timeout={500}>
          {state => (

            <Alert variant="primary" style={{ ...defaultStyle, ...transitionStyles[state] }}>
              Add to favourites
            </Alert>
          )}
        </Transition>
        : null}
      {/* <a href="#"></a> */}
      <Button variant='danger' className='me-3' onClick={fetchRandomRecipe}>Skip</Button>
      <Button variant='success' onClick={() => addFavourites(recipe.idMeal)}>Like</Button>
    </div>
  </div>
};

export default Random;
