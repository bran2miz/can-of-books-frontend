import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class UpdateBook extends React.Component {
  handleSubmit = (ev) => {
    ev.preventDefault();

    const updatedObj = {
      _id: this.props.updateBook._id,
      title: ev.target.bookTitle.value,
      description: ev.target.bookDescription.value,
      email: ev.target.bookEmail.value,
      status: ev.target.bookStatus.checked,
    };

    this.props.handleUpdate(updatedObj);
  };

  handleClose = () => {
    this.props.onClose();
  };

  render() {
    return (
      <>
        <Modal show={this.props.showUpdateForm} onHide={this.handleClose} className="arrange-modal">
          <Modal.Header closeButton>
            <Modal.Title>UPDATE</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(ev) => this.handleSubmit(ev)}>
              <Form.Group className='mb-3' controlId='bookTitle'>
                <Form.Label>TESTING UPDATE</Form.Label>
                <Form.Control
                  type='name'
                  placeholder='Enter Book Title'
                  defaultValue={this.props.updateBook.title}
                ></Form.Control>
              </Form.Group>
              <Form.Group className='mb-3' controlId='bookDescription'>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type='name'
                  placeholder='Enter Book Description'
                  defaultValue={this.props.updateBook.description}
                ></Form.Control>
              </Form.Group>
              <Form.Group className='mb-3' controlId='bookEmail'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter Email'
                  defaultValue={this.props.updateBook.email}
                ></Form.Control>
              </Form.Group>
              <Form.Group className='mb-3' controlId='bookStatus'>
                <Form.Check type='checkbox' label='read' defaultChecked={this.props.updateBook.status}></Form.Check>
              </Form.Group>
              <Button type='Submit'>Submit</Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button className="color-submit" onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default UpdateBook;
