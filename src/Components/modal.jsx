import React, { useState } from "react";
import { Modal, Button, Form, CloseButton } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
export default AddRecipeModal;

function AddRecipeModal(props) {
    const dispath = useDispatch();
    const favourites = useSelector(state => state.favourites.favouritesRecipes);
    const [dishTitle, setDishTitle] = useState('');
    const [dishDescription, setDishDescription] = useState('');

    const [isValidTitle, setIsValidTitle] = useState(false)
    const [isValidDescription, setIsValidDescription] = useState(false)
    const [validation, setValidation] = useState(false)

    const validationTitle = () => {
        if (dishTitle) {
            setIsValidTitle(true)
        } else { setIsValidTitle(false) }
        setValidation(false);
    }

    const validationDescription = () => {
        if (dishDescription.length > 100) {
            setIsValidDescription(true)
        } else setIsValidDescription(false);
        setValidation(false);
    }

    const addNewRecipe = () => {
        setValidation(true);

        if (isValidTitle && isValidDescription) {
            const newRecipe = {
                strMeal: dishTitle,
                strInstructions: dishDescription,
                idMeal: Date.now()
            }
            dispath({ type: "AddRecipe", payload: newRecipe })
            localStorage.data = JSON.stringify([...favourites, newRecipe]);
            setDishTitle('');
            setDishDescription('');
            setValidation(false);
            setIsValidTitle(false);
            setIsValidDescription(false);
            props.onHide();
        }
    }

    const closeModal = () => {
        setDishTitle('');
        setDishDescription('');
        setValidation(false);
        setIsValidTitle(false);
        setIsValidDescription(false);
        props.onHide()
    }

    return (
        <Modal
            {...props}
            dialogClassName="modal-50w"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add custom dish
                </Modal.Title>
                <CloseButton onClick={closeModal} />
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        {(validation && !isValidTitle) ?
                            <h5 style={{ color: "red" }}>
                                Title can not be empty
                            </h5>
                            : null
                        }
                        <Form.Control
                            value={dishTitle}
                            required min="1"
                            type="text"
                            placeholder="Dish title"
                            onChange={e => setDishTitle(e.target.value)}
                            onBlur={validationTitle}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="">
                        {(validation && !isValidDescription) ?
                            <h5 style={{ color: "red" }}>
                                Description must to have at least 100 characters
                            </h5>
                            : null
                        }
                        <Form.Control as="textarea" placeholder="Dish description..."
                            value={dishDescription}
                            rows={5} min='100'
                            onChange={e => setDishDescription(e.target.value)}
                            onBlur={validationDescription}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="info" id='add_dish' onClick={addNewRecipe}>Add custom dish</Button>
            </Modal.Footer>
        </Modal>
    )
}
