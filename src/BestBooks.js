import React from "react";
import axios from "axios";
import DisplayBooks from "./Components/DisplayBooks";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }
  getBooks = async () => {
    // const bookCans = `http://localhost:3001/books`;
    const bookKey = process.env.REACT_APP_SERVER;
    const bookCans = `${bookKey}/books`;
    const retrieveBooks = await axios.get(bookCans);
    this.setState({ books: retrieveBooks.data });
    console.log(retrieveBooks.data);
  };
  componentDidMount() {
    this.getBooks();
    console.log("hello");
  }
  render() {
    // const BooksArr = this.state.books.map((book) => {
    //   return <DisplayBooks book={book} />;
    // });
    // console.log("This is the books arr: ", BooksArr);
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        {this.state.books.length > 1 ? <DisplayBooks books={this.state.books} /> : <h3>there are no books!</h3>}
      </>
    );
  }
}

export default BestBooks;
