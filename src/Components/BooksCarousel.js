import React from "react";
import Carousel from "react-bootstrap/Carousel";
import DisplayBook from "./DisplayBook.js";

class BooksCarousel extends React.Component {
  render() {
    return (
      <>
        <Carousel>
          {this.props.books.map((book) => {
            return (
              <Carousel.Item key={book._id}>
                <DisplayBook
                  title={book.title}
                  description={book.description}
                  status={book.status}
                  email={book.email}
                  removeBook={this.props.removeBook}
                  handleUpdateModal={this.props.handleUpdateModal}
                  book={book}
                ></DisplayBook>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </>
    );
  }
}

export default BooksCarousel;
