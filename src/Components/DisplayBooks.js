import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container'
import '../CSS/Carousel.css'

class DisplayBooks extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
      <Container className='image-container'>
      <Carousel>
        {this.props.book.map(oneBook => 
      <Carousel.Item key={oneBook._id}>
      <img
        className="d-block w-100"
        src="https://via.placeholder.com/100"
        alt="First slide"
        />
      <Carousel.Caption>
        <h3><strong>{oneBook.title}</strong></h3>
        <h3>{oneBook.description}</h3>
        <p>{oneBook.status}</p>
      </Carousel.Caption>
    </Carousel.Item>
    )}
    </Carousel>
    </Container>
    </>
    )
  }
}

export default DisplayBooks;
