import React, { useEffect } from 'react';
import { Button, Alert } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Feedback from '../Components/Feedback';
import { CSSTransition } from 'react-transition-group';
import Styles from './styles/oneRecipeOnPageStyles.css'
import './styles/transitionGroup.css'
import useFetch from '../Hooks/useFetch';
import { useFavorites } from '../Hooks/useFavorites';

const Random = () => {
  const recipe = useSelector(state => state.random.recipe);
  const showFeedBack = useSelector(state => state.showHide.showFeedBack);
  const isResponse = useSelector(state => state.request.isResponse);
  const isError = useSelector(state => state.request.isError);

  const { fetchRandomRecipe } = useFetch()
  const { addFavorites } = useFavorites()

  useEffect(() => {
    fetchRandomRecipe();
  }, [])

  return (<div className='d-flex flex-column align-items-center'>
    {isResponse ?
      <>
        <main className='mx-auto oneRecipeOnPageS' styles={Styles}>
          <img src={recipe.strMealThumb} alt='dish' />
          <article >
            <h2>{recipe.strMeal}</h2>
            <p>{recipe.strInstructions}</p>
          </article>
        </main>

        <div className='buttons position-relative'>
          <CSSTransition
            in={showFeedBack}
            timeout={700}
            classNames="alert"
            unmountOnExit
          >
            <Alert className='feedback' variant="success">
              Add to favorites
            </Alert>
          </CSSTransition>
          <Button href="#" variant='danger' className='me-3' onClick={fetchRandomRecipe}>
            Skip
          </Button>
          <Button variant='success' onClick={() => addFavorites(recipe.idMeal)}>
            Like
          </Button>
        </div>
      </>
      : <h1 style={{ paddingTop: 70 }}>{isError}</h1>}
  </div>
  )
};

export default Random;
