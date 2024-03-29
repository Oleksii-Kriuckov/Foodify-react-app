import React from 'react';
import { Button } from 'react-bootstrap';
import ConfirmModal from './ConfirmModal';
import PlaceholderImg from './PlaceholderImg';

const Main = ({ recipe, length }) => {

  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <main
      className={length === 1 ? 'oneRecipeOnPageS' : ' favour' }
      id={length === 2 ? 'twoRecipeOnPageStyles' : null}
    >
      {(recipe.strMealThumb) ?
        <img className='favourImg' src={recipe.strMealThumb} alt='dish' />
        : <PlaceholderImg />
      }
      <article >
        <h2>{recipe.strMeal}</h2>
        <p>{recipe.strInstructions}</p>
      </article>
      <Button onClick={handleShow} variant='danger'>Remove</Button>
      <ConfirmModal recipe={recipe} show={show} onHide={handleClose} />
    </main>
  )
};

export default Main;
