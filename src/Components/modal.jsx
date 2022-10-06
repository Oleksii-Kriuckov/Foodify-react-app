import React from "react";
import { Modal, Button, Form, CloseButton } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useModal } from "../Hooks/useModal";
import { useForm } from 'react-hook-form'

export function ModalWindow(props) {
    const dispatch = useDispatch();
    const showModal = useSelector(state => state.showHide.showModal)
    const dishTitle = useSelector(state => state.formData.dishTitle)
    const dishDescription = useSelector(state => state.formData.dishDescription)
    const { addNewRecipe, closeModal } = useModal();

    const { register, formState: { errors }, handleSubmit, reset } = useForm({mode: 'onSubmit'});
    return (
        <Modal
        {...props}
        dialogClassName="modal-50w"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showModal}
        onHide={closeModal}
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add custom dish
                </Modal.Title>
                <CloseButton onClick={() => { closeModal(); reset(); }} />
            </Modal.Header>
            <Form >
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        {errors?.dishTitle && <h5 style={{ color: "red" }}>{errors?.dishTitle?.message}</h5>}
                        <Form.Control
                            {...register("dishTitle", {
                                required: "Title can not be empty"
                            })}
                            value={dishTitle}
                            
                            type="text"
                            placeholder="Dish title"
                            onChange={e => dispatch({ type: 'setDishTitle', payload: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="">
                        {errors?.dishDescription &&
                            <h5 style={{ color: "red" }}>{errors?.dishDescription?.message}</h5>
                        }
                        <Form.Control as="textarea" placeholder="Dish description..."
                            {...register('dishDescription', {
                                required: "Title can not be empty",
                                minLength: {
                                    value: 100, message: 'Description must to have at least 100 characters'
                                }
                            })}
                            value={dishDescription}
                            rows={5} 
                            onChange={e => dispatch({ type: 'setDishDescription', payload: e.target.value })}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="info"
                        id='add_dish'
                        onClick={handleSubmit(() => { addNewRecipe(); reset(); })}>
                        Add custom dish
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}
