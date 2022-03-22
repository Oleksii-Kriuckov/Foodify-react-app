import React from 'react'
import { Alert } from 'react-bootstrap'
import { Transition } from 'react-transition-group';

const Feedback = (props) => {

    return (
        <Alert id='feedback' variant="primary" style={props.style}>
            Add to favourites
        </Alert>
    )
}

export default Feedback