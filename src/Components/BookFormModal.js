import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React from 'react';


class BookFormModal extends React.Component{


  handleSubmit = (e) => {
    e.preventDefault();
    const bookInfo = {
      title: e.target.bookTitle.value,
      description: e.target.bookDescription,
      status: e.target.statusCheckbox.checked,
      email: e.target.userEmail.value,
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
                        <Form.Control type="name" placeholder="Enter Your Book Here!" />
                </Form.Group>
                <Form.Group className="mb-3" controlID="bookDescription">
                    <Form.Label>
                      Description of Book
                    </Form.Label>
                        <Form.Control type="description" placeholder="Enter Your Book Description"/>
                </Form.Group>
                <Form.Group className="mb-3" controlID="userEmail">
                    <Form.Label>
                      Email
                    </Form.Label>
                        <Form.Control type="email" placeholder="Enter Your Email"/>
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
