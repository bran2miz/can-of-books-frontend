import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../CSS/Carousel.css'
import { Button } from 'react-bootstrap';


class DisplayBooks extends React.Component {
  render() {
    return (
      <>
        <img
          className="d-block w-100"
         src="https://via.placeholder.com/100"
         alt="First slide"
        />
        <Carousel.Caption>
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
          <p>{this.props.status}</p>
          <Button onClick={() => this.props.handleDelete(this.props.book)}>Delete Book</Button>
        </Carousel.Caption>
      </>
    );
  }
}

export default DisplayBooks;

