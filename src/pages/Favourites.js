import React, {useEffect} from 'react';
import Main from '../Components/main';
import { useSelector, useDispatch } from 'react-redux';
import './styles/favourites.css';
import { Button, Container } from 'react-bootstrap';
import AddRecipeModal from '../Components/modal';

export const Favourites = () => {
  const favourites = useSelector(state => state.favourites.favouritesRecipes);
  const dispath = useDispatch();
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    dispath({type: "SetFavourRecipes", payload: JSON.parse(localStorage.data) })
  }, [])
  

  return <div >
    <Button
      variant='secondary'
      id='open_modal'
      onClick={() => setModalShow(true)}
    >
      Add custom dish
    </Button>

    <Container className='d-flex justify-content-center flex-wrap' style={{ gap: 20 }}>
      {(favourites.length !== 0) ?
        favourites.map(elem =>
          <Main key={elem.idMeal} recipe={elem} />
        ) :
        <h1 className='no_dishes'>There is no favourites dishes</h1>
      }
    </Container>

    <AddRecipeModal show={modalShow} onHide={() => setModalShow(false)} />
  </div>;
};
