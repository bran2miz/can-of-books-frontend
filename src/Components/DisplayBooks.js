import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselBook from "./CarouselBook";

class DisplayBooks extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        <Carousel>
          {this.props.books.map((book) => (
            <CarouselBook book={book} />
          ))}
        </Carousel>
      </>
    );
  }
}

export default DisplayBooks;
