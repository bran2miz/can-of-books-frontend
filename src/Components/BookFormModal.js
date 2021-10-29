import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React from 'react';


class BookFormModal extends React.Component{


  handleBookSubmit = (event) => {
    event.preventDefault();
    const bookInfo = {
      title: event.target.bookTitle.value,
      description: event.target.bookDescription.value,
      status: event.target.statusCheckbox.checked,
      email: event.target.userEmail.value,
    };
    this.props.onCreate(bookInfo);
    }
  
    render(){
        return(
            <Form onSubmit={this.handleBookSubmit}>
                <Form.Group className = "mb-3" controlId = "bookTitle">
                    <Form.Label>
                      Title
                    </Form.Label>
                        <Form.Control type="title" placeholder="Enter Your Book Here!" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="bookDescription">
                    <Form.Label>
                      Description of Book
                    </Form.Label>
                        <Form.Control type="description" placeholder="Enter Your Book Description"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="userEmail">
                    <Form.Label>
                      Email
                    </Form.Label>
                        <Form.Control type="email" placeholder="Enter Your Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="statusCheckbox">
                  <Form.Check type="checkbox" label="Read" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  SUBMIT BOOK
                </Button>
            </Form>
        )
    }

}

export default BookFormModal;
