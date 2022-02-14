import React, {useState} from "react";
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

function AddRecipeModal(props) {
    const dispath = useDispatch();
    const favourites = useSelector(state => state.favourites.favouritesRecipes);
    const [dishTitle, setDishTitle] = useState('');
    const [dishDescription, setDishDescription] = useState('')

const addNewRecipe = () => {
    const newRecipe = {
        strMeal: dishTitle,
        strInstructions: dishDescription,
        idMeal: Date.now()
    }
    dispath({ type: "AddRecipe", payload: newRecipe })

    props.onHide()
}

    return (
        <Modal
            {...props}
            dialogClassName="modal-50w"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add custom dish
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control 
                        type="text" 
                        placeholder="Dish title" 
                        onChange={e => setDishTitle(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="">
                        <Form.Control as="textarea" placeholder="Dish description..." rows={5} 
                        onChange={e => setDishDescription(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="info" id='add_dish' onClick={addNewRecipe}>Add custom dish</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddRecipeModal;

