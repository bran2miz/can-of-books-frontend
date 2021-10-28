import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React from 'react';


class BookFormModal extends React.Component{
    render(){
        return(
            <>
            <Form>
                <Form.Group className = "mb-3" controlId = "bookTitle">
                    <Form.Label>
                    </Form.Label>
                        <Form.Control />

                </Form.Group>
                <Form.Group>
                    <Form.Label>
                    </Form.Label>
                        <Form.Control />

                </Form.Group>
                <Form.Group>
                    <Form.Label>
                    </Form.Label>
                        <Form.Control />

                </Form.Group>
                <Form.Group>
                    <Form.Label>
                    </Form.Label>
                        <Form.Control />

                </Form.Group>
            </Form>

            </>
        )
    }

}