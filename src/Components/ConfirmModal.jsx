import React from 'react'
import { Button, Modal, CloseButton } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';

const ConfirmModal = ({onHide, recipe, ...props}) => {
    const dispath = useDispatch();

    const removeRecipe = () => {
        dispath({type: "RemoveRecipe", payload: recipe.idMeal})
        let data = JSON.parse(localStorage.data)
        localStorage.data = JSON.stringify(data.filter(elem => elem.idMeal !== recipe.idMeal));
        onHide();
      }
    return (
        <div>
            <Modal {...props} onHide={onHide} >
            <CloseButton className='mt-3 ms-auto me-3' onClick={onHide}/>
                <Modal.Body>Are you sure?</Modal.Body>
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