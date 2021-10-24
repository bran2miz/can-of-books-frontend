import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

class DisplayBooks extends React.Component {
  render() {
    return(
      <>
      <Carousel>
      <Carousel.Item interval = {1000}>
        <Carousel.Caption>
          <h3>
            {this.props.book.title}
          </h3>
          <p>
            {this.props.book.description}
          </p>
          <p>
            {this.props.book.status}
          </p>
        </Carousel.Caption>
      </Carousel.Item>


      </Carousel>
      </>
    )
  }
}

export default DisplayBooks;