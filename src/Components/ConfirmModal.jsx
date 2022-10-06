import React from 'react'
import { Button, Modal, CloseButton } from 'react-bootstrap'
import { useDispatch } from 'react-redux';

const ConfirmModal = ({ onHide, recipe, ...props }) => {
    const dispatch = useDispatch();

    const removeRecipe = () => {
        dispatch({ type: "RemoveRecipe", payload: recipe.idMeal })
        let data = JSON.parse(localStorage.data)
        localStorage.data = JSON.stringify(data.filter(elem => elem.idMeal !== recipe.idMeal));
        onHide();
    }

    return (
        <div>
            <Modal {...props} onHide={onHide} >
                <CloseButton className='mt-3 ms-auto me-3' onClick={onHide} />
                <Modal.Body className='fs-5'>Are you sure?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onHide}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={removeRecipe}>
                        Remove
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ConfirmModal