import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
class DisplayBooks extends React.Component {
  render() {
    return(
      <>
      <Carousel>
      <Carousel.Item interval = {1000}>
        <img src="https://via.placeholder.com/100" alt="placeHolder" className="d-block w-100" />
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