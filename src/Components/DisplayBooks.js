import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../CSS/Carousel.css";
import { Button } from "react-bootstrap";

class DisplayBooks extends React.Component {
  render() {
    return (
      <>
        <img className='d-block w-100' src='https://upload.wikimedia.org/wikipedia/commons/e/e4/Interior_view_of_Stockholm_Public_Library.jpg' alt='First slide' />
        <Carousel.Caption>
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
          <p>{this.props.status}</p>
          <Button variant="primary" onClick={() => this.props.onUpdateModal(this.props.book)}>Update Book</Button>
          <Button variant="warning" onClick={() => this.props.onDelete(this.props.book)}>Delete Book</Button>
        </Carousel.Caption>
      </>
    );
  }
}

export default DisplayBooks;

// handleUpdate={this.handleUpdate}
